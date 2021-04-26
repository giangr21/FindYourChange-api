import Clerk from '@modules/Clerk/entities/Clerk';
import Provider from '@modules/Provider/entities/Provider';
import Services from '@modules/Services/entities/Services';
import User from '@modules/User/entities/User';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity('appointment')
export default class Appointment {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => Provider, provider => provider.appointments)
    @JoinColumn({ name: 'provider_id' })
    provider: Provider;

    @ManyToOne(() => Clerk, clerk => clerk.appointments)
    @JoinColumn({ name: 'clerk_id' })
    clerk: Clerk;

    @ManyToOne(() => Services, service => service.appointments)
    @JoinColumn({ name: 'service_id' })
    service: Services;

    @ManyToOne(() => User, user => user.appointments)
    @JoinColumn({ name: 'user_id' })
    user: User;

    @Column({ type: 'timestamptz', name: 'date_appointment', nullable: false })
    dateAppointment: Date;

    @Column({ type: 'varchar', length: 240, name: 'notes', nullable: true })
    notes: string;

    @CreateDateColumn({
        name: 'created_at',
        type: 'timestamptz',
        default: () => 'now()',
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
