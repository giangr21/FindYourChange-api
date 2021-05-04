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
        const clerkId = clerkSchedule.shift();
        const clerkScheduleArr = clerkSchedule.map((clerkObj: any) => {
            return {
                ...clerkObj,
                clerk: clerkId,
            };
        });
        let clerkScheduleRep: any;
        for (let i = 0; i < clerkScheduleArr.length; i++) {
            // eslint-disable-next-line no-await-in-loop
            clerkScheduleRep = await clerkScheduleRepository.save(clerkScheduleArr[i]);
        }
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
