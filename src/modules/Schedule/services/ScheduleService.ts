import { getCustomRepository } from 'typeorm';
import Schedule from '../entities/Schedule';
import ScheduleRepository from '../repositories/ScheduleRepository';

interface ScheduleData {
    id?: string;
    name: string;
    image: string;
    phone: string;
    email: string;
}

export default class ScheduleService {
    public async get(): Promise<Schedule[]> {
        const scheduleRepository = getCustomRepository(ScheduleRepository);
        const schedule = await scheduleRepository.find();
        return schedule;
    }

    public async findById(id: string): Promise<Schedule | undefined> {
        const scheduleRepository = getCustomRepository(ScheduleRepository);
        const schedule = await scheduleRepository.findById(id);
        return schedule;
    }

    public async getByProviderId(id: string): Promise<Schedule[]> {
        const scheduleRepository = getCustomRepository(ScheduleRepository);
        const schedules = await scheduleRepository.find({
            where: {
                provider: {
                    id,
                },
            },
        });
        return schedules;
    }

    public async isDayOfWeekAvailable(dayOfWeek: string, provider: string): Promise<boolean> {
        const scheduleRepository = getCustomRepository(ScheduleRepository);

        const found = await scheduleRepository.find({
            where: {
                dayOfWeek,
                provider: {
                    id: provider,
                },
            },
        });

        if (found.length > 0) {
            return false;
        }

        return true;
    }

    public async create(scheduleData: ScheduleData): Promise<string> {
        const scheduleRepository = getCustomRepository(ScheduleRepository);
        const schedule = await scheduleRepository.save(scheduleData);
        return schedule.id;
    }

    public async update(scheduleData: ScheduleData): Promise<string> {
        const scheduleRepository = getCustomRepository(ScheduleRepository);
        if (!scheduleData.id) {
            throw new Error('Necessario informar id');
        }

        const alreadyExists = await scheduleRepository.findById(scheduleData.id);
        if (!alreadyExists) {
            throw new Error('É Necessário informar um id válido!');
        }

        const schedule = await scheduleRepository.save(scheduleData);
        return schedule.id;
    }

    public async delete(id: string): Promise<boolean> {
        const scheduleRepository = getCustomRepository(ScheduleRepository);
        const exists = await scheduleRepository.findById(id);

        if (!exists) {
            throw new Error('É necessário informar um id válido!');
        }

        await scheduleRepository.delete(id);
        return true;
    }
}
