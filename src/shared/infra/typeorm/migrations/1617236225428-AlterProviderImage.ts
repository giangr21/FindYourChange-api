import { MigrationInterface, QueryRunner } from 'typeorm';

export class AlterProviderImage1617236225428 implements MigrationInterface {
    name = 'AlterProviderImage1617236225428';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "provider_image" RENAME COLUMN "defaultImage" TO "default_image"`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "provider_image" RENAME COLUMN "default_image" TO "defaultImage"`, undefined);
    }
}
