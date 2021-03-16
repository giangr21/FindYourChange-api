import AppError from '@shared/errors/AppError';
import StorageUtil from '@util/storage.util';
import { getCustomRepository } from 'typeorm';
import Clerk from '../entities/Clerk';
import ClerkRepository from '../repositories/ClerkRepository';

interface ClerkData {
    id: string;
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

    public async findClerksByProviderId(id: string): Promise<Clerk[]> {
        const clerkRepository = getCustomRepository(ClerkRepository);
        if (!id) {
            throw new Error('Necessario informar um provider ID');
        }

        const clerks = await clerkRepository.findClerksByProviderId(id);
        return clerks;
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
        const storageUtil = new StorageUtil();

        const clerk = await clerkRepository.findById(clerkData.id);

        if (!clerk) {
            throw new AppError('Atendente não encontrado.');
        }

        const email = await clerkRepository.findByEmail(clerk.email);
        if (email && email.id !== clerk.id) {
            throw new AppError('E-mail já está em uso.');
        }

        if (clerkData.image && clerkData.image !== clerk.image) {
            await storageUtil.deleteFile(clerk.image);
        }

        const newClerk = await clerkRepository.save(clerkData);
        return newClerk.id;
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
