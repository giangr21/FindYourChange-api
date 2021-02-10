import Provider from '@modules/Provider/entities/Provider';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity('schedule')
export default class Schedule {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', name: 'day_of_week', length: 60 })
    dayOfWeek: string;

    @Column({ type: 'varchar', length: 10, name: 'hour_start' })
    hourStart: string;

    @Column({ type: 'varchar', length: 10, name: 'hour_end' })
    hourEnd: string;

    @Column({ type: 'varchar', length: 10, name: 'hour_lunch_start' })
    hourLunchStart: string;

    @Column({ type: 'varchar', length: 10, name: 'hour_lunch_end' })
    hourLunchEnd: string;

    @Column({ type: 'bool', default: false })
    active: boolean;

    @ManyToOne(() => Provider, provider => provider.schedules)
    @JoinColumn({ name: 'provider_id' })
    provider: Provider;

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
