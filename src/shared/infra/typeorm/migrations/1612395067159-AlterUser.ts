import { MigrationInterface, QueryRunner } from 'typeorm';

export class AlterUser1612395067159 implements MigrationInterface {
    name = 'AlterUser1612395067159';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "password"`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ADD "password" character varying(80) NOT NULL`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "password"`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ADD "password" character varying(40) NOT NULL`, undefined);
    }
}
