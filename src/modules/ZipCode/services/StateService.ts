import { getRepository } from 'typeorm';
import State from '../entities/State';

export default class StateService {
    public async get(): Promise<State[]> {
        const repository = getRepository(State);
        const states = await repository.find({
            order: {
                id: 'ASC',
            },
        });
        return states;
    }

    public async getById(id: string): Promise<State | undefined> {
        const repository = getRepository(State);
        const state = await repository.findOne({ id });
        return state;
    }
}
