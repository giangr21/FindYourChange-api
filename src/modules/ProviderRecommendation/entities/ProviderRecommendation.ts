import Provider from '@modules/Provider/entities/Provider';
import User from '@modules/User/entities/User';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, UpdateDateColumn, JoinColumn } from 'typeorm';

@Entity('provider_recommendation')
export default class ProviderRecommendation {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', length: 240, nullable: true })
    notes: string;

    @Column({ type: 'int4', default: 0 })
    rating: number;

    @ManyToOne(() => Provider, provider => provider.providerRecommendations)
    @JoinColumn({ name: 'provider_id' })
    provider: Provider;

    @ManyToOne(() => User, user => user.providerRecommendations)
    @JoinColumn({ name: 'user_id' })
    user: User;

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
