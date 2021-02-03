import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import Central from '@modules/Central/entities/Central';
import User from '@modules/User/entities/User';
import Deliverer from '@modules/Deliverer/entities/Deliverer';
import Order from '@modules/Order/entities/Order';
import Type from '@modules/Type/entities/Type';
import OrderEvent from '@modules/Order/entities/OrderEvent';
import Merchant from '@modules/Merchant/entities/Merchant';

@Entity('incident')
export default class Incident {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => Type, { eager: true })
    @JoinColumn({ name: 'type_id' })
    type: Type;

    @Column({ type: 'varchar', length: 300, nullable: true })
    description: string;

    @Column({ type: 'varchar', length: 200, name: 'conclusion_description', nullable: true })
    conclusionDescription: string;

    @Column({ type: 'timestamptz', name: 'date_release', default: () => 'now()' })
    dateRelease: Date;

    @Column({ type: 'timestamptz', name: 'date_conclusion', nullable: true })
    dateConclusion: Date;

    @CreateDateColumn({
        name: 'created_at',
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

    @ManyToOne(() => Central, central => central.incidents)
    @JoinColumn({ name: 'central_id' })
    central: Central;

    @ManyToOne(() => User, user => user.id)
    @JoinColumn({ name: 'user_id' })
    user: User;

    @ManyToOne(() => Deliverer, deliverer => deliverer.incidents)
    @JoinColumn({ name: 'deliverer_id' })
    deliverer: Deliverer;

    @ManyToOne(() => Order, order => order.incidents)
    @JoinColumn({ name: 'order_id' })
    order: Order;

    @ManyToOne(() => OrderEvent, orderEvent => orderEvent.incidents)
    @JoinColumn({ name: 'order_event_id' })
    orderEvent: OrderEvent;

    @ManyToOne(() => Merchant, merchant => merchant.incidents)
    @JoinColumn({ name: 'merchant_id' })
    merchant: Merchant;
}
