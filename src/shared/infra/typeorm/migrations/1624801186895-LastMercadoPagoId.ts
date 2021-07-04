import { MigrationInterface, QueryRunner } from 'typeorm';

export class LastMercadoPagoId1624801186895 implements MigrationInterface {
    name = 'LastMercadoPagoId1624801186895';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" ADD "lastMercadoPagoId" character varying(60)`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "lastMercadoPagoId"`, undefined);
    }
}
