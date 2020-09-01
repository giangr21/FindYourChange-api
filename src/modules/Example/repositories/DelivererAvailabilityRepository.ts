import { EntityRepository, Repository } from 'typeorm';
import Deliverer from '@modules/Deliverer/entities/Deliverer';
import DelivererAvailability from '../entities/DelivererAvailability';

@EntityRepository(DelivererAvailability)
class DelivererAvailabilityRepository extends Repository<DelivererAvailability> {
    public async findById(id: string): Promise<DelivererAvailability | undefined> {
        const findDeliverer = await this.findOne(id);
        return findDeliverer;
    }

    public async checkStatus(deliverer_id: Deliverer, type_id: string): Promise<boolean> {
        const lastDelivererAvailability = await this.createQueryBuilder('deliverer_availability')
            .where('deliverer_id = :deliverer_id', { deliverer_id })
            .orderBy('index', 'DESC')
            .limit(1)
            .execute();

        if (lastDelivererAvailability.length === 0) {
            return true;
        }

        if (
            lastDelivererAvailability.length > 0 &&
            String(type_id) !== String(lastDelivererAvailability[0].deliverer_availability_type_id)
        ) {
            await this.update(lastDelivererAvailability[0].deliverer_availability_id, {
                dateEnd: new Date(Date.now()),
            });
            return true;
        }
        return false;
    }
}

export default DelivererAvailabilityRepository;
