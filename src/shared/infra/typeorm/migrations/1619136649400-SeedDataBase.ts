import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedDataBase1619136649400 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "product" ADD "product_status" character varying(40)`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        console.log('object');
    }
}
