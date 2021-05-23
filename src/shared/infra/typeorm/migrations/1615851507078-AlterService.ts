import { MigrationInterface, QueryRunner } from 'typeorm';

export class AlterService1615851507078 implements MigrationInterface {
    name = 'AlterService1615851507078';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "services" DROP COLUMN "category"`, undefined);
        await queryRunner.query(`ALTER TABLE "services" ADD "category" character varying(40)`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "services" DROP COLUMN "category"`, undefined);
        await queryRunner.query(`ALTER TABLE "services" ADD "category" character varying(10) NOT NULL`, undefined);
    }
}
