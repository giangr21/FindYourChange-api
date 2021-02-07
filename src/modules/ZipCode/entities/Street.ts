import { Column, Entity, ManyToOne, JoinColumn } from 'typeorm';
import City from './City';
import Area from './Area';

@Entity('street', { schema: 'zip_code' })
export default class Street {
    @Column({
        type: 'varchar',
        name: 'zip_code',
        length: 2,
        primary: true,
    })
    zipCode: string;

    @Column({
        type: 'varchar',
        name: 'type',
        length: 50,
    })
    type: string;

    @Column({
        type: 'varchar',
        name: 'name',
        length: 100,
    })
    name: string;

    @Column({
        type: 'varchar',
        name: 'public_place',
        length: 100,
    })
    publicPlace: string;

    @ManyToOne(() => Area, { eager: true })
    @JoinColumn({ name: 'area_id' })
    area: Area;

    @ManyToOne(() => City, { eager: true })
    @JoinColumn({ name: 'city_id' })
    city: City;

    @Column({
        type: 'varchar',
        name: 'state_id',
        length: 2,
    })
    stateId: string;

    @Column({
        type: 'varchar',
        name: 'clear_type',
        length: 100,
    })
    clearType: string;

    @Column({
        type: 'varchar',
        name: 'clear_name',
        length: 100,
    })
    clearName: string;

    @Column({
        type: 'varchar',
        name: 'clear_public_place',
        length: 100,
    })
    clearPublicPlace: string;

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

    @Column({
        type: 'varchar',
        name: 'zip_code_active',
        length: 20,
    })
    zipCodeActive: string;
}
