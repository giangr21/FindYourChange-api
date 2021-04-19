import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Appointment from '../entities/Appointment';
import AppointmentRepository from '../repositories/AppointmentRepository';

interface AppointmentData {
    id: string;
    provider: any;
    user: any;
    serviceType: string;
    rating: number;
    notes: string;
}

export default class AppointmentService {
    public async get(): Promise<Appointment[]> {
        const appointmentRepository = getCustomRepository(AppointmentRepository);
        const appointment = await appointmentRepository.find();
        return appointment;
    }

    public async findAppointmentByFilter(filter: any): Promise<Appointment[]> {
        const appointmentRepository = getCustomRepository(AppointmentRepository);
        if (!filter.providerId) {
            throw new Error('Necessario informar um provider ID');
        }

        const clerks = await appointmentRepository.findAppointmentByFilter(filter);
        return clerks;
    }

    public async findById(id: string): Promise<Appointment | undefined> {
        const appointmentRepository = getCustomRepository(AppointmentRepository);
        const service = await appointmentRepository.findById(id);
        return service;
    }

    public async create(appointmentData: AppointmentData): Promise<string> {
        const appointmentRepository = getCustomRepository(AppointmentRepository);
        const service = await appointmentRepository.save(appointmentData);
        return service.id;
    }

    public async update(appointmentData: AppointmentData): Promise<string> {
        const appointmentRepository = getCustomRepository(AppointmentRepository);

        const appointment = await appointmentRepository.findById(appointmentData.id);

        if (!appointment) {
            throw new AppError('Agendamento não encontrado.');
        }

        const newAppointment = await appointmentRepository.save(appointmentData);
        return newAppointment.id;
    }

    public async delete(id: string): Promise<boolean> {
        const appointmentRepository = getCustomRepository(AppointmentRepository);
        const alreadyExists = await appointmentRepository.findById(id);
        if (!alreadyExists) {
            throw new Error('É necessário informar um id válido!');
        }
        await appointmentRepository.delete(id);
        return true;
    }
}
