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

    public async create(clerkData: ScheduleData): Promise<string> {
        const scheduleRepository = getCustomRepository(ScheduleRepository);
        const alreadyExists = await scheduleRepository.findByEmail(clerkData.email);
        if (alreadyExists) {
            throw new Error('Já existe um atendente com este email');
        }
        const schedule = await scheduleRepository.save(clerkData);
        return schedule.id;
    }

    public async update(clerkData: ScheduleData): Promise<string> {
        const scheduleRepository = getCustomRepository(ScheduleRepository);
        if (!clerkData.id) {
            throw new Error('Necessario informar id');
        }
        const alreadyExists = await scheduleRepository.findById(clerkData.id);
        if (!alreadyExists) {
            throw new Error('É Necessário informar um id válido!');
        }
        const sameEmail = await scheduleRepository.findByEmail(clerkData.email);
        if (sameEmail && !(alreadyExists.id === sameEmail.id)) {
            throw new Error('Ja existe um atendente com este email');
        }
        const schedule = await scheduleRepository.save(clerkData);
        return schedule.id;
    }

    public async delete(id: string): Promise<boolean> {
        const scheduleRepository = getCustomRepository(ScheduleRepository);
        const alreadyExists = await scheduleRepository.findById(id);
        if (!alreadyExists) {
            throw new Error('É necessário informar um id válido!');
        }
        await scheduleRepository.delete(id);
        return true;
    }
}
