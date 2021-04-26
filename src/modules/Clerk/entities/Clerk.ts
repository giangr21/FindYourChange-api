import Appointment from '@modules/Appointment/entities/Appointment';
import Provider from '@modules/Provider/entities/Provider';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, UpdateDateColumn, JoinColumn, OneToMany } from 'typeorm';

@Entity('clerk')
export default class Clerk {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', length: 60 })
    name: string;

    @Column({ type: 'varchar', length: 120, nullable: true })
    image: string;

    @Column({ type: 'varchar', length: 60 })
    email: string;

    @Column({ type: 'varchar', length: 14, nullable: true })
    phone: string;

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

    @ManyToOne(() => Provider, provider => provider.products)
    @JoinColumn({ name: 'provider_id' })
    provider: Provider;

    @OneToMany(() => Appointment, appointment => appointment.clerk)
    appointments: Appointment[];
}
