import { EntityRepository, Repository } from 'typeorm';
import Token from '../entities/Token';

@EntityRepository(Token)
class TokenRepository extends Repository<Token> {
    public async findByToken(token: string): Promise<Token | undefined> {
        const response = await this.findOne({
            where: {
                token,
            },
        });
        return response;
    }

    public async generate(typeSystem: string, requestedId: string): Promise<Token> {
        const token = await this.create({
            typeSystem,
            requestedId,
        });

        await this.save(token);

        return token;
    }
}

export default TokenRepository;
