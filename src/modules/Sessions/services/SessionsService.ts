import { sign } from 'jsonwebtoken';
import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
// import { compare, hash } from 'bcryptjs';
import { compare } from 'bcryptjs';
// import TokenRepository from '@modules/Token/repositories/TokenRepository';
// import moment from 'moment';
// import path from 'path';
import ProviderRepository from '@modules/Provider/repositories/ProviderRepository';
import Provider from '@modules/Provider/entities/Provider';
// import SendEmailService from '../../../services/SendEmailService';
import UserRepository from '../../User/repositories/UserRepository';
import User from '../../User/entities/User';
import authConfig from '../../../config/auth';

interface IRequest {
    email: string;
    password: string;
    isProvider: boolean;
}

interface IResponseUser {
    user: User | Provider;
    token: string;
}

class SessionsService {
    public async login({ email, password, isProvider }: IRequest): Promise<IResponseUser> {
        const userRepository = getCustomRepository(UserRepository);
        const providerRepository = getCustomRepository(ProviderRepository);

        let provider: any;
        let user: any;

        if (isProvider) {
            provider = await providerRepository.findByEmail(email);

            if (!provider) {
                throw new AppError('Email/Senha incorreto.');
            }
        } else {
            user = await userRepository.findByEmail(email);

            if (!user) {
                throw new AppError('Email/Senha incorreto.');
            }
        }

        const passwordMatched = await compare(password.toLowerCase(), isProvider ? provider.password : user.password);

        if (!passwordMatched) {
            throw new AppError('Email/Senha incorreto.');
        }

        const { secret, expiresIn } = authConfig.jwt;
        const token = sign({}, secret, {
            subject: isProvider ? provider.id : user.id,
            expiresIn,
        });

        if (isProvider) {
            delete provider.password;
        } else {
            delete user.password;
        }

        return {
            user: isProvider ? provider : user,
            token,
        };
    }

    public async resetPassword(token: string, password: string, systemType: string): Promise<void> {
        // const tokenRepository = getCustomRepository(TokenRepository);
        // const userRepository = getCustomRepository(UserRepository);
        // const merchantRepository = getCustomRepository(MerchantRepository);
        // const delivererRepository = getCustomRepository(DelivererRepository);
        // let user: User | Merchant | Deliverer | undefined;
        // let repository: any;
        // const userToken = await tokenRepository.findByToken(token);
        // if (!userToken) {
        //     throw new AppError('Token informado não existe!');
        // }
        // if (systemType === 'central') {
        //     user = await userRepository.findById(userToken.requestedId);
        //     if (!user) {
        //         throw new AppError('Usuário não encontrado, tente novamente !');
        //     }
        //     repository = userRepository;
        // } else if (systemType === 'merchant') {
        //     user = await merchantRepository.findById(userToken.requestedId);
        //     if (!user) {
        //         throw new AppError('Restaurante não encontrado, tente novamente !');
        //     }
        //     repository = merchantRepository;
        // } else if (systemType === 'deliverer') {
        //     user = await delivererRepository.findById(userToken.requestedId);
        //     if (!user) {
        //         throw new AppError('Entregador não encontrado, tente novamente !');
        //     }
        //     repository = delivererRepository;
        // } else {
        //     throw new AppError('Tipo sistema informado não encontrado!');
        // }
        // const now = moment();
        // const duration = moment.duration(now.diff(moment(userToken.createdAt)));
        // if (duration.asMinutes() > 120) {
        //     throw new AppError('Seu token para mudar a senha expirou! Solicite novamente!');
        // }
        // user.password = await hash(password.toLowerCase(), 8);
        // await repository.save(user);
    }

    public async sendForgotPasswordEmail(email: string, systemType: string): Promise<void> {
        // const userRepository = getCustomRepository(UserRepository);
        // const merchantRepository = getCustomRepository(MerchantRepository);
        // const delivererRepository = getCustomRepository(DelivererRepository);
        // const tokenRepository = getCustomRepository(TokenRepository);
        // const sendEmailService = new SendEmailService();
        // let user: User | Merchant | Deliverer | undefined;
        // if (systemType === 'central') {
        //     user = await userRepository.findByEmail(email);
        //     if (!user) {
        //         throw new AppError('Usuário não encontrado, tente novamente !');
        //     }
        // } else if (systemType === 'merchant') {
        //     user = await merchantRepository.findByEmail(email);
        //     if (!user) {
        //         throw new AppError('Restaurante não encontrado, tente novamente !');
        //     }
        // } else if (systemType === 'deliverer') {
        //     user = await delivererRepository.findByEmail(email);
        //     if (!user) {
        //         throw new AppError('Entregador não encontrado, tente novamente !');
        //     }
        // } else {
        //     throw new AppError('Tipo sistema informado não encontrado!');
        // }
        // const { token } = await tokenRepository.generate(systemType, user.id);
        // const forgotPasswordTemplate = path.resolve(__dirname, '..', '..', '..', 'templates', 'ForgotPassword.hbs');
        // await sendEmailService.sendMail({
        //     to: {
        //         name: user.name,
        //         email: user.email,
        //     },
        //     subject: '[Olog] Recuperacao de senha',
        //     templateData: {
        //         file: forgotPasswordTemplate,
        //         variables: {
        //             name: user.name,
        //             link: `${process.env.APP_WEB_CENTRAL_URL}/reset-password/${token}/${systemType}`,
        //         },
        //     },
        // });
    }
}

export default SessionsService;
