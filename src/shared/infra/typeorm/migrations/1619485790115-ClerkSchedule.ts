import { MigrationInterface, QueryRunner } from 'typeorm';

export class ClerkSchedule1619485790115 implements MigrationInterface {
    name = 'ClerkSchedule1619485790115';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "clerk_schedule" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "day_of_week" character varying(60) NOT NULL, "hour_start" character varying(10) NOT NULL, "hour_end" character varying(10) NOT NULL, "hour_lunch_start" character varying(10) NOT NULL, "hour_lunch_end" character varying(10) NOT NULL, "active" boolean NOT NULL DEFAULT false, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "clerk_id" uuid, CONSTRAINT "PK_3775197b1e2bf27d2de4c059982" PRIMARY KEY ("id"))`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "clerk_schedule" ADD CONSTRAINT "FK_04504ca886c57c4ab50ae89d415" FOREIGN KEY ("clerk_id") REFERENCES "clerk"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
            undefined,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clerk_schedule" DROP CONSTRAINT "FK_04504ca886c57c4ab50ae89d415"`, undefined);
        await queryRunner.query(`DROP TABLE "clerk_schedule"`, undefined);
    }
}
