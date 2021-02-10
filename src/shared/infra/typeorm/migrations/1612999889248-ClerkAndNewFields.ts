import { MigrationInterface, QueryRunner } from 'typeorm';

export class ClerkAndNewFields1612999889248 implements MigrationInterface {
    name = 'ClerkAndNewFields1612999889248';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "clerk" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(60) NOT NULL, "image" character varying(120), "email" character varying(60) NOT NULL, "phone" character varying(14), "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "provider_id" uuid, CONSTRAINT "PK_6f5819bd79d513e618396d1d761" PRIMARY KEY ("id"))`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "schedule" ADD "hour_lunch_start" character varying(10) NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "schedule" ADD "hour_lunch_end" character varying(10) NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "appointment" ADD "notes" character varying(240)`, undefined);
        await queryRunner.query(`ALTER TABLE "services" ADD "disccount" numeric`, undefined);
        await queryRunner.query(`ALTER TABLE "services" ADD "category" character varying(10) NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "services" ADD "time" character varying(20) NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "services" ADD "image" character varying(120)`, undefined);
        await queryRunner.query(
            `ALTER TABLE "clerk" ADD CONSTRAINT "FK_0f45fd10dd5c9c64672296a6cff" FOREIGN KEY ("provider_id") REFERENCES "provider"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
            undefined,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clerk" DROP CONSTRAINT "FK_0f45fd10dd5c9c64672296a6cff"`, undefined);
        await queryRunner.query(`ALTER TABLE "services" DROP COLUMN "image"`, undefined);
        await queryRunner.query(`ALTER TABLE "services" DROP COLUMN "time"`, undefined);
        await queryRunner.query(`ALTER TABLE "services" DROP COLUMN "category"`, undefined);
        await queryRunner.query(`ALTER TABLE "services" DROP COLUMN "disccount"`, undefined);
        await queryRunner.query(`ALTER TABLE "appointment" DROP COLUMN "notes"`, undefined);
        await queryRunner.query(`ALTER TABLE "schedule" DROP COLUMN "hour_lunch_end"`, undefined);
        await queryRunner.query(`ALTER TABLE "schedule" DROP COLUMN "hour_lunch_start"`, undefined);
        await queryRunner.query(`DROP TABLE "clerk"`, undefined);
    }
}
