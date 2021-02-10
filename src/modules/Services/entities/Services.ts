import Provider from '@modules/Provider/entities/Provider';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity('services')
export default class Services {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', length: 40 })
    title: string;

    @Column({ type: 'varchar', length: 240 })
    description: string;

    @Column({ type: 'numeric', name: 'value', default: 0 })
    value: number;

    @Column({ type: 'numeric', name: 'disccount', nullable: true })
    disccount: number;

    @Column({ type: 'numeric', length: 10, name: 'category' })
    category: string;

    @Column({ type: 'varchar', length: 20 })
    time: string;

    @Column({ type: 'varchar', length: 120, nullable: true })
    image: string;

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
