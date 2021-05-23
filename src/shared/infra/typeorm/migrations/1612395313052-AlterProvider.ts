import { MigrationInterface, QueryRunner } from 'typeorm';

export class AlterProvider1612395313052 implements MigrationInterface {
    name = 'AlterProvider1612395313052';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "provider" DROP COLUMN "password"`, undefined);
        await queryRunner.query(`ALTER TABLE "provider" ADD "password" character varying(80) NOT NULL`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "provider" DROP COLUMN "password"`, undefined);
        await queryRunner.query(`ALTER TABLE "provider" ADD "password" character varying(40) NOT NULL`, undefined);
    }
}
