import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import { hash } from 'bcryptjs';
import User from '../entities/User';
import UserRepository from '../repositories/UserRepository';

interface IRequest {
    id: string;
    name: string;
    lastName: string;
    phone: string;
    email: string;
    password: string;
    centrals?: [];
    profiles?: [];
}

class UserService {
    // public async get(): Promise<User[]> {
    //     const userRepository = getCustomRepository(UserRepository);
    //     const centralRepository = getRepository(Central);

    //     const users = await userRepository.find({
    //         order: {
    //             createdAt: 'ASC',
    //         },
    //     });

    // }

    public async getById(id: string): Promise<User | undefined> {
        const userRepository = getCustomRepository(UserRepository);
        const user: any = await userRepository.findById(id);

        return user;
    }

    public async create(userData: Omit<IRequest, 'id'>): Promise<User> {
        const userRepository = getCustomRepository(UserRepository);

        const checkUserExists = await userRepository.findByEmail(userData.email);

        if (checkUserExists) {
            throw new AppError('E-mail já está em uso.');
        }

        const hashedPassword = await hash(userData.password.toLowerCase(), 8);
        console.log(hashedPassword);
        userData.password = hashedPassword;

        const user = userRepository.create(userData);
        await userRepository.save(user);

        return user;
    }

    public async update(userData: IRequest): Promise<User | undefined> {
        const userRepository = getCustomRepository(UserRepository);

        const user = await userRepository.findById(userData.id);

        if (!user) {
            throw new AppError('Usuario nao encontrado.');
        }

        const newUser = await userRepository.save(userData);

        return newUser;
    }

    public async delete(id: string): Promise<void> {
        const userRepository = getCustomRepository(UserRepository);
        const user = await userRepository.findById(id);

        if (!user) {
            throw new AppError('User ID does not exist', 404);
        }

        await userRepository.delete({ id });
    }

    public async findMyAppointments(userId: string): Promise<any> {
        const userRepository = getCustomRepository(UserRepository);
        return userRepository.findAllAppointmentsFromUser(userId);
    }
}

export default UserService;
