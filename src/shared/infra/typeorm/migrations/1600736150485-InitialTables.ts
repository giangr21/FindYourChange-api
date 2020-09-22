import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitialTables1600736150485 implements MigrationInterface {
    name = 'InitialTables1600736150485';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "product" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(60) NOT NULL, "value" numeric NOT NULL DEFAULT 0, "quantity" numeric NOT NULL DEFAULT 0, "category" character varying(40), "product_img" character varying(120), "description" character varying(240), "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "provider_id" uuid, CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`,
            undefined,
        );
        await queryRunner.query(
            `CREATE TABLE "schedule" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "day_of_week" character varying(60) NOT NULL, "hour_start" character varying(10) NOT NULL, "hour_end" character varying(10) NOT NULL, "active" boolean NOT NULL DEFAULT false, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "provider_id" uuid, CONSTRAINT "PK_1c05e42aec7371641193e180046" PRIMARY KEY ("id"))`,
            undefined,
        );
        await queryRunner.query(
            `CREATE TABLE "provider" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(60) NOT NULL, "last_name" character varying(100) NOT NULL, "phone" character varying(13), "email" character varying(60) NOT NULL, "password" character varying(40) NOT NULL, "avatar" character varying(120), "address_zip_code" character varying(11), "address_street" character varying(70) NOT NULL, "address_number" integer NOT NULL, "address_complement" character varying(100), "address_area" character varying(60) NOT NULL, "address_city" character varying(60) NOT NULL, "address_state" character varying(2) NOT NULL, "address_country" character varying(60) NOT NULL DEFAULT 'Brasil', "is_barber" boolean NOT NULL DEFAULT false, "is_tattoo" boolean NOT NULL DEFAULT false, "is_piercing" boolean NOT NULL DEFAULT false, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_6ab2f66d8987bf1bfdd6136a2d5" PRIMARY KEY ("id"))`,
            undefined,
        );
        await queryRunner.query(
            `CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(60) NOT NULL, "last_name" character varying(100) NOT NULL, "phone" character varying(13), "email" character varying(60) NOT NULL, "password" character varying(40) NOT NULL, "avatar" character varying(120), "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`,
            undefined,
        );
        await queryRunner.query(
            `CREATE TABLE "appointment" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "date_release" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "value" numeric NOT NULL DEFAULT 0, "service_type" character varying(40), "rate" numeric NOT NULL DEFAULT 0, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "provider_id" uuid, "user_id" uuid, CONSTRAINT "PK_e8be1a53027415e709ce8a2db74" PRIMARY KEY ("id"))`,
            undefined,
        );
        await queryRunner.query(
            `CREATE TABLE "services" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying(40) NOT NULL, "description" character varying(240) NOT NULL, "value" numeric NOT NULL DEFAULT 0, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "provider_id" uuid, CONSTRAINT "PK_ba2d347a3168a296416c6c5ccb2" PRIMARY KEY ("id"))`,
            undefined,
        );
        await queryRunner.query(
            `CREATE TABLE "token" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "token" uuid NOT NULL DEFAULT uuid_generate_v4(), "type_user" character varying(60) NOT NULL, "user_id" uuid NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_82fae97f905930df5d62a702fc9" PRIMARY KEY ("id"))`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "product" ADD CONSTRAINT "FK_21370c1fdc836875d42b50851de" FOREIGN KEY ("provider_id") REFERENCES "provider"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "schedule" ADD CONSTRAINT "FK_9698707326c000bd370a085cf9b" FOREIGN KEY ("provider_id") REFERENCES "provider"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "appointment" ADD CONSTRAINT "FK_378ea106aad574466ce9c50b365" FOREIGN KEY ("provider_id") REFERENCES "provider"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "appointment" ADD CONSTRAINT "FK_15d50a87502380623ff0c27e458" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "services" ADD CONSTRAINT "FK_e7a40b21f8fd548be206fcc89b2" FOREIGN KEY ("provider_id") REFERENCES "provider"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
            undefined,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "services" DROP CONSTRAINT "FK_e7a40b21f8fd548be206fcc89b2"`, undefined);
        await queryRunner.query(`ALTER TABLE "appointment" DROP CONSTRAINT "FK_15d50a87502380623ff0c27e458"`, undefined);
        await queryRunner.query(`ALTER TABLE "appointment" DROP CONSTRAINT "FK_378ea106aad574466ce9c50b365"`, undefined);
        await queryRunner.query(`ALTER TABLE "schedule" DROP CONSTRAINT "FK_9698707326c000bd370a085cf9b"`, undefined);
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_21370c1fdc836875d42b50851de"`, undefined);
        await queryRunner.query(`DROP TABLE "token"`, undefined);
        await queryRunner.query(`DROP TABLE "services"`, undefined);
        await queryRunner.query(`DROP TABLE "appointment"`, undefined);
        await queryRunner.query(`DROP TABLE "user"`, undefined);
        await queryRunner.query(`DROP TABLE "provider"`, undefined);
        await queryRunner.query(`DROP TABLE "schedule"`, undefined);
        await queryRunner.query(`DROP TABLE "product"`, undefined);
    }
}
