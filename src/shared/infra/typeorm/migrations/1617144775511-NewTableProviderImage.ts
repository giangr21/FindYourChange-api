import { MigrationInterface, QueryRunner } from 'typeorm';

export class NewTableProviderImage1617144775511 implements MigrationInterface {
    name = 'NewTableProviderImage1617144775511';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "provider_image" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "image" character varying(120), "defaultImage" boolean NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "provider_id" uuid, CONSTRAINT "PK_c4b2368649babce9f3b1fdc36f9" PRIMARY KEY ("id"))`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "provider_image" ADD CONSTRAINT "FK_358a179e3790c56986cb661568c" FOREIGN KEY ("provider_id") REFERENCES "provider"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
            undefined,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "provider_image" DROP CONSTRAINT "FK_358a179e3790c56986cb661568c"`, undefined);
        await queryRunner.query(`DROP TABLE "provider_image"`, undefined);
    }
}
