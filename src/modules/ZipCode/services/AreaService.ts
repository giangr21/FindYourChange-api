import { getRepository } from 'typeorm';
import Area from '../entities/Area';

export default class AreaService {
    public async getById(id: string): Promise<Area | undefined> {
        const repository = getRepository(Area);
        const area = await repository.findOne({ id });
        return area;
    }

    public async getByCityId(cityId: string): Promise<Area[]> {
        const repository = getRepository(Area);

        return repository.createQueryBuilder('area').where('area.city_id = :city_id', { city_id: cityId }).getMany();
    }
}
