import { MigrationInterface, QueryRunner } from 'typeorm';

export class ClerkScheduleFix1619981563588 implements MigrationInterface {
    name = 'ClerkScheduleFix1619981563588';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clerk_schedule" DROP COLUMN "hour_lunch_start"`, undefined);
        await queryRunner.query(`ALTER TABLE "clerk_schedule" DROP COLUMN "hour_lunch_end"`, undefined);
        await queryRunner.query(`ALTER TABLE "clerk_schedule" ALTER COLUMN "active" SET DEFAULT true`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clerk_schedule" ALTER COLUMN "active" SET DEFAULT false`, undefined);
        await queryRunner.query(`ALTER TABLE "clerk_schedule" ADD "hour_lunch_end" character varying(10) NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "clerk_schedule" ADD "hour_lunch_start" character varying(10) NOT NULL`, undefined);
    }
}
