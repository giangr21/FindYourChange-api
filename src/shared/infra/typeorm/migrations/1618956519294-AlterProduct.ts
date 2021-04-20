import { MigrationInterface, QueryRunner } from 'typeorm';

export class AlterProduct1618956519294 implements MigrationInterface {
    name = 'AlterProduct1618956519294';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" ADD "product_status" character varying(40)`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "product_status"`, undefined);
    }
}
