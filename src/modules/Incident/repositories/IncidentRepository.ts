/* eslint-disable no-await-in-loop */
import { EntityRepository, Repository } from 'typeorm';
import moment from 'moment';
import Incident from '../entities/Incident';
import { IncidentFilter } from '../services/IncidentService';

interface IncidentFilterResponse {
    incident: Array<Incident>;
    incidentCount: any;
}

@EntityRepository(Incident)
class IncidentRepository extends Repository<Incident> {
    public async findById(id: string): Promise<Incident | undefined> {
        const incident = await this.createQueryBuilder()
            .from(Incident, 'incident')
            .select([
                'incident',
                'deliverer.id',
                'deliverer.name',
                'deliverer.lastName',
                'central',
                'order.id',
                'order.orderNumber',
                'user.name',
                'user.lastName',
                'merchant.name',
            ])
            .leftJoinAndSelect('incident.type', 'type')
            .leftJoin('incident.deliverer', 'deliverer')
            .leftJoin('incident.central', 'central')
            .leftJoin('incident.order', 'order')
            .leftJoin('incident.user', 'user')
            .leftJoin('incident.merchant', 'merchant')
            .where('incident.id = :id', {
                id,
            })
            .getOne();
        return incident;
    }

    public async getIncidentsByOrderId(orderId: string): Promise<Incident[]> {
        const incidents = await this.createQueryBuilder()
            .from(Incident, 'incident')
            .select(['incident', 'deliverer.id', 'deliverer.name', 'deliverer.lastName', 'central', 'user.name', 'user.lastName'])
            .leftJoinAndSelect('incident.type', 'type')
            .leftJoin('incident.deliverer', 'deliverer')
            .leftJoin('incident.central', 'central')
            .leftJoin('incident.user', 'user')
            .where('incident.order = :orderId', {
                orderId,
            })
            .getMany();
        return incidents;
    }

    public async getIncidentsAndConcludeByOrderId(orderId: string, conclusionDescription: string): Promise<void> {
        const incidents = await this.createQueryBuilder()
            .from(Incident, 'incident')
            .select(['incident'])
            .where('incident.order = :orderId', {
                orderId,
            })
            .andWhere('incident.dateConclusion is NULL')
            .getMany();

        for (let index = 0; index < incidents.length; index++) {
            const incident = incidents[index];
            await this.save({
                id: incident.id,
                dateConclusion: moment().format('YYYY-MM-DD hh:mm:ss A Z'),
                conclusionDescription,
            });
        }
    }

    public async getIncidentsNotConcluded(centralId: string): Promise<number> {
        const incidents = await this.createQueryBuilder()
            .from(Incident, 'incident')
            .select(['incident.id'])
            .where('incident.central = :centralId', {
                centralId,
            })
            .andWhere('incident.dateConclusion is NULL')
            .getMany();
        return incidents.length;
    }

    public async getByFilter(filter: IncidentFilter): Promise<IncidentFilterResponse> {
        const count = await this.createQueryBuilder('incident')
            .select('count(incident.dateRelease)')
            .innerJoin('incident.order', 'order')
            .where('incident.central = :central_id', {
                central_id: filter.central,
            });

        const findIncident = await this.createQueryBuilder()
            .from(Incident, 'incident')
            .select([
                'incident',
                'order.orderNumber',
                'order.id',
                'deliverer.id',
                'deliverer.name',
                'deliverer.lastName',
                'merchant.id',
                'merchant.name',
            ])
            .innerJoin('incident.order', 'order')
            .innerJoinAndSelect('incident.type', 'type')
            .leftJoin('incident.deliverer', 'deliverer')
            .leftJoin('incident.merchant', 'merchant')
            .orderBy('incident.createdAt', 'DESC')
            .where('incident.central = :central_id', {
                central_id: filter.central,
            });

        if (filter.isConcluded === undefined) {
            findIncident.andWhere('incident.dateConclusion is NULL');
            count.andWhere('incident.dateConclusion is NULL');
        } else if (filter.isConcluded === true) {
            findIncident.andWhere('incident.dateConclusion is not NULL');
            count.andWhere('incident.dateConclusion is not NULL');
        }

        if (filter.orderNumber && filter.orderNumber.trim() !== '') {
            findIncident.andWhere('order.orderNumber = :orderNumber', {
                orderNumber: filter.orderNumber,
            });
            count.andWhere('order.orderNumber = :orderNumber', {
                orderNumber: filter.orderNumber,
            });
        }

        if (filter.type && filter.type.length > 0) {
            findIncident.andWhere('incident.type in (:...type)', {
                type: filter.type,
            });
            count.andWhere('incident.type in (:...type)', {
                type: filter.type,
            });
        }

        if (filter.deliverers && filter.deliverers.length > 0) {
            findIncident.andWhere('incident.deliverer in (:...deliverers)', {
                deliverers: filter.deliverers,
            });
            count.andWhere('incident.deliverer in (:...deliverers)', {
                deliverers: filter.deliverers,
            });
        }

        if (filter.merchants && filter.merchants.length > 0) {
            findIncident.andWhere('incident.merchant in (:...merchants)', {
                merchants: filter.merchants,
            });
            count.andWhere('incident.merchant in (:...merchants)', {
                merchants: filter.merchants,
            });
        }

        if (
            filter.dateReleaseStart &&
            filter.dateReleaseStart.trim() !== '' &&
            filter.dateReleaseEnd &&
            filter.dateReleaseEnd.trim() !== ''
        ) {
            findIncident.andWhere('incident.dateRelease between :dateStart and :dateEnd', {
                dateStart: `${filter.dateReleaseStart}`,
                dateEnd: `${filter.dateReleaseEnd}`,
            });
            count.andWhere('incident.dateRelease between :dateStart and :dateEnd', {
                dateStart: `${filter.dateReleaseStart}`,
                dateEnd: `${filter.dateReleaseEnd}`,
            });
        }
        const incidentCount = await count.getRawMany();
        const incident = await findIncident
            .skip((filter.page - 1) * 15)
            .take(15)
            .getMany();
        return { incident, incidentCount };
    }

    public async createUniqueIncident(orderId: string, description: string, typeId: string, centralId: string): Promise<void> {
        try {
            const incident = await this.findOne({
                where: {
                    order: {
                        id: orderId,
                    },
                    type: {
                        id: typeId,
                    },
                },
            });

            if (incident) {
                await this.save({
                    id: incident.id,
                    description,
                });
                return;
            }

            await this.save({
                order: {
                    id: orderId,
                },
                description,
                type: {
                    id: typeId,
                },
                central: {
                    id: centralId,
                },
            });
        } catch (e) {
            console.log(e);
        }
    }

    public async createConcludedIncident(
        orderId: string,
        description: string,
        conclusionDescription: string,
        typeId: string,
        centralId: string,
        raplace = true,
    ): Promise<void> {
        try {
            if (raplace) {
                const incident = await this.findOne({
                    where: {
                        order: {
                            id: orderId,
                        },
                        type: {
                            id: typeId,
                        },
                    },
                });

                if (incident) {
                    await this.save({
                        id: incident.id,
                        description,
                    });
                    return;
                }
            }
            await this.save({
                order: {
                    id: orderId,
                },
                description,
                conclusionDescription,
                type: {
                    id: typeId,
                },
                central: {
                    id: centralId,
                },
                dateConclusion: moment().format('YYYY-MM-DD hh:mm:ss A Z'),
            });
        } catch (e) {
            console.log(e);
        }
    }
}

export default IncidentRepository;
