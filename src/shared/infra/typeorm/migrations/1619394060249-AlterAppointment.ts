import { MigrationInterface, QueryRunner } from 'typeorm';

export class AlterAppointment1619394060249 implements MigrationInterface {
    name = 'AlterAppointment1619394060249';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "appointment" DROP COLUMN "date_release"`, undefined);
        await queryRunner.query(`ALTER TABLE "appointment" DROP COLUMN "value"`, undefined);
        await queryRunner.query(`ALTER TABLE "appointment" DROP COLUMN "service_type"`, undefined);
        await queryRunner.query(`ALTER TABLE "appointment" DROP COLUMN "rating"`, undefined);
        await queryRunner.query(`ALTER TABLE "appointment" ADD "date_appointment" TIMESTAMP WITH TIME ZONE NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "appointment" ADD "clerk_id" uuid`, undefined);
        await queryRunner.query(`ALTER TABLE "appointment" ADD "service_id" uuid`, undefined);
        await queryRunner.query(
            `ALTER TABLE "appointment" ADD CONSTRAINT "FK_50d08db396c2e0e3e9db01564b5" FOREIGN KEY ("clerk_id") REFERENCES "clerk"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "appointment" ADD CONSTRAINT "FK_a170b01d5845a629233fb80a51a" FOREIGN KEY ("service_id") REFERENCES "services"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
            undefined,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "appointment" DROP CONSTRAINT "FK_a170b01d5845a629233fb80a51a"`, undefined);
        await queryRunner.query(`ALTER TABLE "appointment" DROP CONSTRAINT "FK_50d08db396c2e0e3e9db01564b5"`, undefined);
        await queryRunner.query(`ALTER TABLE "appointment" DROP COLUMN "service_id"`, undefined);
        await queryRunner.query(`ALTER TABLE "appointment" DROP COLUMN "clerk_id"`, undefined);
        await queryRunner.query(`ALTER TABLE "appointment" DROP COLUMN "date_appointment"`, undefined);
        await queryRunner.query(`ALTER TABLE "appointment" ADD "rating" integer NOT NULL DEFAULT 0`, undefined);
        await queryRunner.query(`ALTER TABLE "appointment" ADD "service_type" character varying(40)`, undefined);
        await queryRunner.query(`ALTER TABLE "appointment" ADD "value" numeric NOT NULL DEFAULT 0`, undefined);
        await queryRunner.query(`ALTER TABLE "appointment" ADD "date_release" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`, undefined);
    }
}
