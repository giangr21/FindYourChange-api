import { MigrationInterface, QueryRunner } from 'typeorm';

export class AlterProviderRecommendation1618177934436 implements MigrationInterface {
    name = 'AlterProviderRecommendation1618177934436';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "provider_recommendation" DROP COLUMN "user_name"`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "provider_recommendation" ADD "user_name" character varying(60)`, undefined);
    }
}
