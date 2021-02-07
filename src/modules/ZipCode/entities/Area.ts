import { Column, Entity, ManyToOne, JoinColumn } from 'typeorm';
import City from './City';
import State from './State';

@Entity('area', { schema: 'zip_code' })
export default class Area {
    @Column({
        type: 'int4',
        primary: true,
    })
    id: string;

    @Column({
        type: 'varchar',
        name: 'name',
        length: 100,
    })
    name: string;

    @Column({
        type: 'varchar',
        name: 'clear_name',
        length: 100,
    })
    clearName: string;

    @ManyToOne(() => State)
    @JoinColumn({ name: 'state_id' })
    state: State;

    @ManyToOne(() => City)
    @JoinColumn({ name: 'city_id' })
    city: City;

    @Column({
        type: 'varchar',
        name: 'latitude',
        length: 2,
    })
    latitude: string;

    @Column({
        type: 'varchar',
        name: 'longitude',
        length: 2,
    })
    longitude: string;
}
