import Appointment from '@modules/Appointment/entities/Appointment';
import Clerk from '@modules/Clerk/entities/Clerk';
import Product from '@modules/Product/entities/Product';
import Schedule from '@modules/Schedule/entities/Schedule';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('provider')
export default class Provider {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', length: 60 })
    name: string;

    @Column({ type: 'varchar', length: 100, name: 'last_name' })
    lastName: string;

    @Column({ type: 'varchar', length: 13, nullable: true })
    phone: string;

    @Column({ type: 'varchar', length: 60 })
    email: string;

    @Column({ type: 'varchar', length: 80 })
    password: string;

    @Column({ type: 'varchar', length: 120, nullable: true })
    avatar: string;

    @Column({ type: 'varchar', length: 11, name: 'address_zip_code', nullable: true })
    addressZipCode: string;

    @Column({ type: 'varchar', length: 70, name: 'address_street' })
    addressStreet: string;

    @Column({ type: 'int4', name: 'address_number' })
    addressNumber: number;

    @Column({ type: 'varchar', length: 100, name: 'address_complement', nullable: true })
    addressComplement: string;

    @Column({ type: 'varchar', length: 60, name: 'address_area' })
    addressArea: string;

    @Column({ type: 'varchar', length: 60, name: 'address_city' })
    addressCity: string;

    @Column({ type: 'varchar', length: 2, name: 'address_state' })
    addressState: string;

    @Column({ type: 'varchar', length: 60, name: 'address_country', default: 'Brasil' })
    addressCountry: string;

    @Column({ type: 'bool', name: 'is_barber', default: false })
    isBarber: boolean;

    @Column({ type: 'bool', name: 'is_tattoo', default: false })
    isTattoo: boolean;

    @Column({ type: 'bool', name: 'is_piercing', default: false })
    isPiercing: boolean;

    @CreateDateColumn({
        name: 'created_at',
        type: 'timestamptz',
        default: () => 'now()',
        select: false,
    })
    createdAt: Date;

    @UpdateDateColumn({
        name: 'updated_at',
        default: () => 'now()',
        type: 'timestamptz',
        select: false,
    })
    updatedAt: Date;

    @OneToMany(() => Product, product => product.provider, { eager: true })
    products: Product[];

    @OneToMany(() => Appointment, appointment => appointment.provider)
    appointments: Appointment[];

    @OneToMany(() => Schedule, schedule => schedule.provider)
    schedules: Schedule[];

    @OneToMany(() => Clerk, clerk => clerk.provider, { eager: true })
    clerks: Clerk[];
}
