import Provider from '@modules/Provider/entities/Provider';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, UpdateDateColumn, JoinColumn } from 'typeorm';

@Entity('provider_image')
export default class ProviderImage {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', length: 120, nullable: true })
    image: string;

    @Column({ type: 'bool', name: 'default_image' })
    defaultImage: boolean;

    @ManyToOne(() => Provider, provider => provider.providerImages)
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
