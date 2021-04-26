import Appointment from '@modules/Appointment/entities/Appointment';
import Provider from '@modules/Provider/entities/Provider';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';

@Entity('services')
export default class Services {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', length: 40 })
    title: string;

    @Column({ type: 'varchar', length: 240 })
    description: string;

    @Column({ type: 'numeric', default: 0 })
    value: number;

    @Column({ type: 'numeric', nullable: true })
    disccount: number;

    @Column({ type: 'varchar', length: 40, nullable: true })
    category: string;

    @Column({ type: 'varchar', length: 20 })
    time: string;

    @Column({ type: 'varchar', length: 120, nullable: true })
    image: string;

    @Column({ type: 'bool', default: false })
    isPopularService: boolean;

    @ManyToOne(() => Provider, provider => provider.schedules)
    @JoinColumn({ name: 'provider_id' })
    provider: Provider;

    @OneToMany(() => Appointment, appointment => appointment.service)
    appointments: Appointment[];

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
