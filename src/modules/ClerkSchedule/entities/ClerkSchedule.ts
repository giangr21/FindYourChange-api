import Clerk from '@modules/Clerk/entities/Clerk';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity('clerk_schedule')
export default class ClerkSchedule {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', name: 'day_of_week', length: 60 })
    dayOfWeek: string;

    @Column({ type: 'varchar', length: 10, name: 'hour_start' })
    hourStart: string;

    @Column({ type: 'varchar', length: 10, name: 'hour_end' })
    hourEnd: string;

    @Column({ type: 'bool', default: true })
    active: boolean;

    @ManyToOne(() => Clerk, clerk => clerk.clerkSchedules)
    @JoinColumn({ name: 'clerk_id' })
    clerk: Clerk;

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
