/* eslint-disable no-await-in-loop */
import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import OrderRepository from '@modules/Order/repositories/OrderRepository';
import OrderEventRepository from '@modules/Order/repositories/OrderEventRepository';
import moment from 'moment';
import Incident from '../entities/Incident';
import IncidentRepository from '../repositories/IncidentRepository';
import { OrderTypeStatusEnum, IncidentTypeEnum } from '../../../common/enum';

interface IRequest {
    id: string;
    type: string;
    description: string;
    dateRelease?: Date;
    dateConclusion?: Date;
    central: string;
    user?: string;
    deliverer: string | null;
    order: string;
}

export interface IncidentFilter {
    type: [];
    deliverers: [];
    merchants: [];
    central: string;
    orderNumber: string;
    isConcluded: boolean;
    dateReleaseStart: string;
    dateReleaseEnd: string;
    page: number;
}

class IncidentService {
    public async get(filter: IncidentFilter): Promise<any> {
        const incidentRepository = getCustomRepository(IncidentRepository);

        if (!filter.central) {
            throw new AppError('Necessário informar uma central.');
        }

        if (!filter.page) {
            throw new AppError('Necessário informar paginacao.');
        }

        const incident = await incidentRepository.getByFilter(filter);
        return incident;
    }

    public async getById(delivererId: string): Promise<Incident | undefined> {
        const incidentRepository = getCustomRepository(IncidentRepository);
        const incident = await incidentRepository.findById(delivererId);
        return incident;
    }

    public async getIncidentsByOrderId(orderId: string): Promise<Incident[]> {
        const incidentRepository = getCustomRepository(IncidentRepository);
        const incidents = await incidentRepository.getIncidentsByOrderId(orderId);
        return incidents;
    }

    public async getIncidentsNotConcluded(centralId: string): Promise<number> {
        const incidentRepository = getCustomRepository(IncidentRepository);
        const incidents = await incidentRepository.getIncidentsNotConcluded(centralId);
        return incidents;
    }

    public async incidentOrderMonitor(): Promise<void> {
        const incidentRepository = getCustomRepository(IncidentRepository);
        const orderRepository = getCustomRepository(OrderRepository);
        const orderEventRepository = getCustomRepository(OrderEventRepository);
        const orders = await orderRepository.getOrdersToIncidentMonitor();
        for (let index = 0; index < orders.length; index++) {
            const order = orders[index];
            const lastEvent = await orderEventRepository.getLastEventDelayedByOrder(order.id);
            if (lastEvent) {
                const incident = await incidentRepository.findOne({
                    where: {
                        orderEvent: {
                            id: lastEvent.id,
                        },
                    },
                });
                if (!incident) {
                    let incidentType = '';
                    let description = '';
                    if (order.typeStatus.id === OrderTypeStatusEnum.waitingAcceptance) {
                        incidentType = IncidentTypeEnum.orderNotAccepted;
                        description = `Pedido ${order.orderNumber} ainda não foi aceito por nenhum entregador. `;
                    } else if (order.typeStatus.id === OrderTypeStatusEnum.accepted) {
                        if (order && order.deliverer) {
                            description = `Pedido ${order.orderNumber} vinculado ao entregador ${order.deliverer.name} ${
                                order.deliverer.lastName
                            } com data de coleta para ${moment(lastEvent.dateExpectedArrival, 'YYYY-MM-DD hh:mm:ss A Z').format(
                                'DD/MM/YYYY HH:mm',
                            )} esta atrasado. `;
                            incidentType = IncidentTypeEnum.collectDelayed;
                        }
                    } else if (order.typeStatus.id === OrderTypeStatusEnum.waitingRestaurant) {
                        if (order && order.deliverer) {
                            description = `Entregador ${order.deliverer.name} ${order.deliverer.lastName} aguardando produção do pedido ${
                                order.orderNumber
                            } com horario estipulado para ${moment(lastEvent.dateExpectedArrival, 'YYYY-MM-DD hh:mm:ss A Z').format(
                                'DD/MM/YYYY HH:mm',
                            )}`;
                            incidentType = IncidentTypeEnum.productionDelayed;
                        }
                    } else if (order.typeStatus.id === OrderTypeStatusEnum.atTransit) {
                        if (order && order.deliverer) {
                            description = `Pedido ${order.orderNumber} vinculado ao entregador ${order.deliverer.name} ${
                                order.deliverer.lastName
                            } com data de entrega para ${moment(lastEvent.dateExpectedArrival, 'YYYY-MM-DD hh:mm:ss A Z').format(
                                'DD/MM/YYYY HH:mm',
                            )} esta atrasado.`;
                            incidentType = IncidentTypeEnum.deliveryDelayed;
                        }
                    } else if (order.typeStatus.id === OrderTypeStatusEnum.waitingCustomer) {
                        if (order && order.deliverer) {
                            description = `Entregador ${order.deliverer.name} ${
                                order.deliverer.lastName
                            } aguardando cliente receber o pedido desde ${moment(lastEvent.dateRelease, 'YYYY-MM-DD hh:mm:ss A Z').format(
                                'DD/MM/YYYY HH:mm',
                            )}.`;
                            incidentType = IncidentTypeEnum.consumerAway;
                        }
                    }
                    if (incidentType !== '') {
                        await this.create({
                            merchant: order.merchant.id,
                            orderEvent: lastEvent.id,
                            central: order.central.id,
                            deliverer: order.deliverer ? order.deliverer.id : null,
                            order: order.id,
                            description,
                            type: incidentType,
                        });
                    }
                }
            }
        }
    }

    public async create(incidentData: any): Promise<void> {
        const incidentRepository = getCustomRepository(IncidentRepository);

        const incident = await incidentRepository.create(incidentData);

        await incidentRepository.save(incident);
    }

    public async createUniqueIncident(orderId: string, description: string, typeId: string, centralId: string): Promise<void> {
        const incidentRepository = getCustomRepository(IncidentRepository);
        await incidentRepository.createUniqueIncident(orderId, description, typeId, centralId);
    }

    public async update(incidentData: any): Promise<void> {
        const incidentRepository = getCustomRepository(IncidentRepository);
        const incident = await incidentRepository.findById(incidentData.id);

        if (!incident) {
            throw new AppError('Incident not found.');
        }

        await incidentRepository.update(incidentData.id, incidentData);
    }

    public async delete(id: string): Promise<void> {
        const incidentRepository = getCustomRepository(IncidentRepository);
        const incident = await incidentRepository.findById(id);

        if (!incident) {
            throw new AppError('Incident ID does not exist', 404);
        }

        await incidentRepository.delete({ id });
    }
}

export default IncidentService;
