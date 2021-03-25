import { MigrationInterface, QueryRunner } from 'typeorm';

export class AlterService1616627847434 implements MigrationInterface {
    name = 'AlterService1616627847434';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "services" ADD "isPopularService" boolean NOT NULL DEFAULT false`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "services" DROP COLUMN "isPopularService"`, undefined);
    }
}
