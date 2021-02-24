import Provider from '@modules/Provider/entities/Provider';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, JoinColumn, ManyToOne } from 'typeorm';

@Entity('product')
export default class Product {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', length: 60 })
    name: string;

    @Column({ type: 'numeric', default: 0 })
    value: number;

    @Column({ type: 'numeric', default: 0 })
    quantity: number;

    @Column({ type: 'varchar', length: 40, nullable: true })
    category: string;

    @Column({ type: 'varchar', name: 'product_img', length: 120, nullable: true })
    productImage: string;

    @Column({ type: 'varchar', length: 240, nullable: true })
    description: string;

    @ManyToOne(() => Provider, provider => provider.products)
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
