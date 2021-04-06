import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableProviderRecommendation1617749998786 implements MigrationInterface {
    name = 'CreateTableProviderRecommendation1617749998786';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "appointment" RENAME COLUMN "rate" TO "rating"`, undefined);
        await queryRunner.query(
            `CREATE TABLE "provider_recommendation" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "notes" character varying(240), "user_name" character varying(60), "rating" integer NOT NULL DEFAULT 0, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "provider_id" uuid, "user_id" uuid, CONSTRAINT "PK_434a354bd5b42a85dcde19a34d8" PRIMARY KEY ("id"))`,
            undefined,
        );
        await queryRunner.query(`ALTER TABLE "appointment" DROP COLUMN "rating"`, undefined);
        await queryRunner.query(`ALTER TABLE "appointment" ADD "rating" integer NOT NULL DEFAULT 0`, undefined);
        await queryRunner.query(
            `ALTER TABLE "provider_recommendation" ADD CONSTRAINT "FK_a530c91f740320b6a231db2da8f" FOREIGN KEY ("provider_id") REFERENCES "provider"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "provider_recommendation" ADD CONSTRAINT "FK_f7d7c7cfe8497486216473259cb" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
            undefined,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "provider_recommendation" DROP CONSTRAINT "FK_f7d7c7cfe8497486216473259cb"`, undefined);
        await queryRunner.query(`ALTER TABLE "provider_recommendation" DROP CONSTRAINT "FK_a530c91f740320b6a231db2da8f"`, undefined);
        await queryRunner.query(`ALTER TABLE "appointment" DROP COLUMN "rating"`, undefined);
        await queryRunner.query(`ALTER TABLE "appointment" ADD "rating" numeric NOT NULL DEFAULT 0`, undefined);
        await queryRunner.query(`DROP TABLE "provider_recommendation"`, undefined);
        await queryRunner.query(`ALTER TABLE "appointment" RENAME COLUMN "rating" TO "rate"`, undefined);
    }
}
