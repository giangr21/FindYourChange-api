import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import Deliverer from '@modules/Deliverer/entities/Deliverer';

@Entity('deliverer_availability')
export default class DelivererAvailability {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        type: 'varchar',
        length: 40,
        name: 'type_id',
    })
    typeId: string;

    @Column({ type: 'timestamptz', name: 'date_start', nullable: true })
    dateStart: Date;

    @Column({ type: 'timestamptz', name: 'date_end', nullable: true })
    dateEnd: Date;

    @Column({
        type: 'int8',
        nullable: false,
        default: () => `nextval('deliverer_availability_seq')`,
    })
    index: number;

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

    @ManyToOne(() => Deliverer, deliverer => deliverer.delivererAvailabilities)
    @JoinColumn({ name: 'deliverer_id' })
    deliverer: Deliverer;
}
