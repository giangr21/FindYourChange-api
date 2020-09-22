import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, Generated } from 'typeorm';

@Entity('token')
class Token {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    @Generated('uuid')
    token: string;

    @Column({
        type: 'varchar',
        length: 60,
        name: 'type_user',
    })
    typeUser: string;

    @Column({
        type: 'uuid',
        name: 'user_id',
    })
    userId: string;

    @CreateDateColumn({
        name: 'created_at',
        default: () => 'now()',
    })
    createdAt: Date;

    @UpdateDateColumn({
        name: 'updated_at',
        default: () => 'now()',
    })
    updatedAt: Date;
}

export default Token;
