import { Column, Entity, ManyToMany } from 'typeorm';
import Area from './Area';

@Entity('city', { schema: 'zip_code' })
export default class City {
    @Column({
        type: 'int4',
        primary: true,
    })
    id: number;

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

    @Column({
        type: 'varchar',
        name: 'state_id',
        length: 2,
    })
    stateId: string;

    @Column({
        type: 'varchar',
        name: 'ibge_code',
        length: 20,
    })
    ibgeCode: string;

    @Column({
        type: 'varchar',
        name: 'phone_prefix',
        length: 2,
    })
    phonePrefix: string;

    @Column({
        type: 'varchar',
        name: 'dimension',
        length: 20,
    })
    dimension: string;

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

    @ManyToMany(() => Area)
    areas: Area[];
}
