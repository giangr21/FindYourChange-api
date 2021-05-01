import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import ClerkSchedule from '../entities/ClerkSchedule';
import ClerkScheduleRepository from '../repositories/clerkScheduleRepository';

export default class ClerkScheduleService {
    public async findByProviderId(id: string): Promise<ClerkSchedule[]> {
        try {
            const clerkScheduleRepository = getCustomRepository(ClerkScheduleRepository);
            return clerkScheduleRepository.findByProviderId(id);
        } catch (e) {
            console.log(e);
            throw new AppError(e);
        }
    }

    public async create(clerkSchedule: any): Promise<string> {
        const clerkScheduleRepository = getCustomRepository(ClerkScheduleRepository);

        const clerkScheduleRep = await clerkScheduleRepository.save(clerkSchedule);
        return clerkScheduleRep.id;
    }

    public async delete(id: string): Promise<boolean> {
        const clerkScheduleRepository = getCustomRepository(ClerkScheduleRepository);

        const alreadyExists = await clerkScheduleRepository.findById(id);
        if (!alreadyExists) {
            throw new AppError('É necessário informar um id válido!');
        }

        await clerkScheduleRepository.delete(id);
        return true;
    }
}
