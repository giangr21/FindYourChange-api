import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import Deliverer from '@modules/Deliverer/entities/Deliverer';
import DelivererAvailability from '../entities/DelivererAvailability';
import DelivererAvailabilityRepository from '../repositories/DelivererAvailabilityRepository';

interface IRequest {
    id: string;
    typeId: string;
    dateStart: Date;
    dateEnd: Date;
    deliverer: Deliverer;
}

class DelivererAvailabilityService {
    public async get(): Promise<DelivererAvailability[]> {
        const delivererAvailabilityRepository = getCustomRepository(DelivererAvailabilityRepository);
        const deliverer = await delivererAvailabilityRepository.find();
        return deliverer;
    }

    public async create(delivererAvailabilityData: Omit<IRequest, 'id'>): Promise<DelivererAvailability | undefined> {
        const delivererAvailabilityRepository = getCustomRepository(DelivererAvailabilityRepository);

        const status = await delivererAvailabilityRepository.checkStatus(
            delivererAvailabilityData.deliverer,
            delivererAvailabilityData.typeId,
        );

        if (status) {
            delivererAvailabilityData.dateStart = new Date(Date.now());
            const deliverer = await delivererAvailabilityRepository.create(delivererAvailabilityData);
            await delivererAvailabilityRepository.save(deliverer);
            return deliverer;
        }
    }

    public async update(delivererData: IRequest): Promise<void> {
        const delivererAvailabilityRepository = getCustomRepository(DelivererAvailabilityRepository);
        const deliverer = await delivererAvailabilityRepository.findById(delivererData.id);

        if (!deliverer) {
            throw new AppError('DelivererAvailability not found.');
        }

        await delivererAvailabilityRepository.update(delivererData.id, delivererData);
    }

    public async delete(id: string): Promise<void> {
        const delivererAvailabilityRepository = getCustomRepository(DelivererAvailabilityRepository);
        const deliverer = await delivererAvailabilityRepository.findById(id);

        if (!deliverer) {
            throw new AppError('DelivererAvailability ID does not exist', 404);
        }

        await delivererAvailabilityRepository.delete({ id });
    }
}

export default DelivererAvailabilityService;
