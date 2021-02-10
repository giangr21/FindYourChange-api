import { getCustomRepository } from 'typeorm';
import Clerk from '../entities/Clerk';
import ClerkRepository from '../repositories/ClerkRepository';

interface ClerkData {
    id?: string;
    name: string;
    image: string;
    phone: string;
    email: string;
}

export default class ClerkService {
    public async get(): Promise<Clerk[]> {
        const clerkRepository = getCustomRepository(ClerkRepository);
        const clerk = await clerkRepository.find();
        return clerk;
    }

    public async findById(id: string): Promise<Clerk | undefined> {
        const clerkRepository = getCustomRepository(ClerkRepository);
        const clerk = await clerkRepository.findById(id);
        return clerk;
    }

    public async create(clerkData: ClerkData): Promise<string> {
        const clerkRepository = getCustomRepository(ClerkRepository);
        const alreadyExists = await clerkRepository.findByEmail(clerkData.email);
        if (alreadyExists) {
            throw new Error('Já existe um atendente com este email');
        }
        const clerk = await clerkRepository.save(clerkData);
        return clerk.id;
    }

    public async update(clerkData: ClerkData): Promise<string> {
        const clerkRepository = getCustomRepository(ClerkRepository);
        if (!clerkData.id) {
            throw new Error('Necessario informar id');
        }
        const alreadyExists = await clerkRepository.findById(clerkData.id);
        if (!alreadyExists) {
            throw new Error('É Necessário informar um id válido!');
        }
        const sameEmail = await clerkRepository.findByEmail(clerkData.email);
        if (sameEmail && !(alreadyExists.id === sameEmail.id)) {
            throw new Error('Ja existe um atendente com este email');
        }
        const clerk = await clerkRepository.save(clerkData);
        return clerk.id;
    }

    public async delete(id: string): Promise<boolean> {
        const clerkRepository = getCustomRepository(ClerkRepository);
        const alreadyExists = await clerkRepository.findById(id);
        if (!alreadyExists) {
            throw new Error('É necessário informar um id válido!');
        }
        await clerkRepository.delete(id);
        return true;
    }
}
