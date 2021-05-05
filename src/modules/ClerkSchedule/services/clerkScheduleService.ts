import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import ClerkSchedule from '../entities/ClerkSchedule';
import ClerkScheduleRepository from '../repositories/clerkScheduleRepository';

export default class ClerkScheduleService {
    public async findScheduleByClerkId(id: string): Promise<ClerkSchedule[]> {
        try {
            const clerkScheduleRepository = getCustomRepository(ClerkScheduleRepository);
            return clerkScheduleRepository.findScheduleByClerkId(id);
        } catch (e) {
            console.log(e);
            throw new AppError(e);
        }
    }

    public async create(clerkSchedule: any): Promise<string> {
        const clerkScheduleRepository = getCustomRepository(ClerkScheduleRepository);
        const clerkScheduleRep = await clerkScheduleRepository.saveClerkSchedule(clerkSchedule);
        return clerkScheduleRep;
    }

    public async update(clerkSchedule: any): Promise<string> {
        const clerkRepository = getCustomRepository(ClerkScheduleRepository);
        const clerkScheduleRep = await clerkRepository.findScheduleByClerkId(clerkSchedule[0]);
        if (!clerkScheduleRep) {
            throw new AppError('Atendente sem agenda cadastrada!');
        }
        await clerkRepository.deleteByProviderId(clerkSchedule[0]);
        const newClerkSchedule = await clerkRepository.saveClerkSchedule(clerkSchedule);
        return newClerkSchedule;
    }

    public async delete(id: string): Promise<boolean> {
        const clerkScheduleRepository = getCustomRepository(ClerkScheduleRepository);

        const alreadyExists = await clerkScheduleRepository.findScheduleByClerkId(id);
        if (!alreadyExists) {
            throw new AppError('É necessário informar um id válido!');
        }

        await clerkScheduleRepository.deleteByProviderId(id);
        return true;
    }
}
