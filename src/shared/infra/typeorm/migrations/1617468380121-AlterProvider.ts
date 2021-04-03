import { MigrationInterface, QueryRunner } from 'typeorm';

export class AlterProvider1617468380121 implements MigrationInterface {
    name = 'AlterProvider1617468380121';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "provider" ADD "legal_name" character varying(100) NOT NULL DEFAULT ''`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "provider" DROP COLUMN "legal_name"`, undefined);
    }
}
