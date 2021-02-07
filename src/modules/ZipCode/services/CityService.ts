import { getRepository } from 'typeorm';
import City from '../entities/City';

export default class CityService {
    public async getById(id: string): Promise<City | undefined> {
        const repository = getRepository(City);
        const city = await repository.findOne({
            where: {
                id,
            },
        });
        return city;
    }

    public async getByStateId(stateId: string): Promise<City[]> {
        const repository = getRepository(City);

        return repository
            .createQueryBuilder('city')
            .select(['city.id', 'city.name'])
            .where('city.state_id = :state_id', { state_id: stateId })
            .orderBy('name')
            .getMany();
    }
}
