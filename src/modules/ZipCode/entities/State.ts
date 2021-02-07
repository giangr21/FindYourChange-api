import { Column, Entity } from 'typeorm';

@Entity('state', { schema: 'zip_code' })
export default class State {
    @Column({
        type: 'varchar',
        primary: true,
    })
    id: string;

    @Column({
        type: 'varchar',
        name: 'zip_code_start',
        length: 8,
    })
    zipCodeStart: string;

    @Column({
        type: 'varchar',
        name: 'zip_code_end',
        length: 8,
    })
    zipCodeEnd: string;

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
        name: 'clear_capital',
        length: 100,
    })
    clearCapital: string;

    @Column({
        type: 'varchar',
        name: 'clear_region',
        length: 100,
    })
    clearRegion: string;

    @Column({
        type: 'varchar',
        name: 'capital',
        length: 100,
    })
    capital: string;

    @Column({
        type: 'varchar',
        name: 'region',
        length: 100,
    })
    region: string;

    @Column({
        type: 'varchar',
        name: 'latitude',
        length: 2,
        primary: true,
    })
    latitude: string;

    @Column({
        type: 'varchar',
        name: 'longitude',
        length: 2,
        primary: true,
    })
    longitude: string;
}
