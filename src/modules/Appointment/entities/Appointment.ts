import Provider from '@modules/Provider/entities/Provider';
import User from '@modules/User/entities/User';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity('appointment')
export default class Appointment {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => Provider, provider => provider.appointments)
    @JoinColumn({ name: 'provider_id' })
    provider: Provider;

    @ManyToOne(() => User, user => user.appointments)
    @JoinColumn({ name: 'user_id' })
    user: User;

    @Column({ type: 'timestamptz', name: 'date_release', default: () => 'now()' })
    dateRelease: Date;

    @Column({ type: 'numeric', default: 0 })
    value: number;

    @Column({ type: 'varchar', length: 40, name: 'service_type', nullable: true })
    serviceType: string;

    @Column({ type: 'numeric', default: 0 })
    rate: number;

    @Column({ type: 'varchar', length: 240, name: 'notes', nullable: true })
    notes: string;

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
}
