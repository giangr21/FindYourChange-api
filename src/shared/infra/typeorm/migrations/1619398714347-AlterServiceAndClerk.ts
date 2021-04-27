import { MigrationInterface, QueryRunner } from 'typeorm';

export class AlterServiceAndClerk1619398714347 implements MigrationInterface {
    name = 'AlterServiceAndClerk1619398714347';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "service_clerk" ("service_id" uuid NOT NULL, "clerk_id" uuid NOT NULL, CONSTRAINT "PK_c7ab980cccb0254b9239c3bf44f" PRIMARY KEY ("service_id", "clerk_id"))`,
            undefined,
        );
        await queryRunner.query(`CREATE INDEX "IDX_cf8387cdf8172f02bfdf5cf9de" ON "service_clerk" ("service_id") `, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_78c61bbbc1beae0bcfd2fe8816" ON "service_clerk" ("clerk_id") `, undefined);
        await queryRunner.query(
            `ALTER TABLE "service_clerk" ADD CONSTRAINT "FK_cf8387cdf8172f02bfdf5cf9de8" FOREIGN KEY ("service_id") REFERENCES "services"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "service_clerk" ADD CONSTRAINT "FK_78c61bbbc1beae0bcfd2fe88161" FOREIGN KEY ("clerk_id") REFERENCES "clerk"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
            undefined,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "service_clerk" DROP CONSTRAINT "FK_78c61bbbc1beae0bcfd2fe88161"`, undefined);
        await queryRunner.query(`ALTER TABLE "service_clerk" DROP CONSTRAINT "FK_cf8387cdf8172f02bfdf5cf9de8"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_78c61bbbc1beae0bcfd2fe8816"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_cf8387cdf8172f02bfdf5cf9de"`, undefined);
        await queryRunner.query(`DROP TABLE "service_clerk"`, undefined);
    }
}
