import Appointment from '@modules/Appointment/entities/Appointment';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('user')
export default class User {
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

    @Column({ type: 'varchar', length: 40 })
    password: string;

    @Column({ type: 'varchar', length: 120, nullable: true })
    avatar: string;

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

    @OneToMany(() => Appointment, appointment => appointment.user)
    appointments: Appointment[];
}
