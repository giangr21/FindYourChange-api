import { getRepository } from 'typeorm';
import Street from '../entities/Street';
import { getNumbersFromString } from '../../../util/app.util';

export default class StreetService {
    public async getById(zipCode: string): Promise<Street | undefined> {
        const repository = getRepository(Street);
        const streets = await repository.findOne({ zipCode: getNumbersFromString(zipCode) });
        return streets;
    }

    public async find(stateId: string, cityId: string, streetName: string): Promise<Street[]> {
        const repository = getRepository(Street);

        return repository
            .createQueryBuilder('street')
            .select(['street.zipCode', 'street.name', 'area.name'])
            .innerJoin('street.area', 'area')
            .where('street.state_id = :state_id', { state_id: stateId })
            .where('street.city_id = :city_id', { city_id: cityId })
            .andWhere('street.name ilike :name', { name: `%${streetName}%` })
            .limit(100)
            .getMany();
    }
}
