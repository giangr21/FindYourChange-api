import { MigrationInterface, QueryRunner } from 'typeorm';

export class ClerkSchedule1620428018392 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<any> {
        // clerkSchedule - Antônio
        await queryRunner.query(
            `
        INSERT INTO public.clerk_schedule (day_of_week, hour_start, hour_end, active,  clerk_id) VALUES('Segunda-Feira', '08:00', '20:00', true, '70af1995-a6b8-4d3c-9ed4-985149b7cca0');
        INSERT INTO public.clerk_schedule (day_of_week, hour_start, hour_end, active,  clerk_id) VALUES('Terça-Feira', '08:00', '20:00', true, '70af1995-a6b8-4d3c-9ed4-985149b7cca0');
        INSERT INTO public.clerk_schedule (day_of_week, hour_start, hour_end, active,  clerk_id) VALUES('Quarta-Feira', '08:00', '20:00', true, '70af1995-a6b8-4d3c-9ed4-985149b7cca0');
        INSERT INTO public.clerk_schedule (day_of_week, hour_start, hour_end, active,  clerk_id) VALUES('Quinta-Feira', '08:00', '20:00', true, '70af1995-a6b8-4d3c-9ed4-985149b7cca0');
        INSERT INTO public.clerk_schedule (day_of_week, hour_start, hour_end, active,  clerk_id) VALUES('Sexta-Feira', '08:00', '20:00', true, '70af1995-a6b8-4d3c-9ed4-985149b7cca0');
        INSERT INTO public.clerk_schedule (day_of_week, hour_start, hour_end, active,  clerk_id) VALUES('Sabado', '08:00', '20:00', true, '70af1995-a6b8-4d3c-9ed4-985149b7cca0');`,
            undefined,
        );

        // clerkSchedule - Roberto corta franja
        await queryRunner.query(
            `
        INSERT INTO public.clerk_schedule (day_of_week, hour_start, hour_end, active,  clerk_id) VALUES('Segunda-Feira', '08:00', '20:00', true, 'a2ce94d1-cdc7-407b-95ef-b928127bc234');
        INSERT INTO public.clerk_schedule (day_of_week, hour_start, hour_end, active,  clerk_id) VALUES('Terça-Feira', '08:00', '20:00', true, 'a2ce94d1-cdc7-407b-95ef-b928127bc234');
        INSERT INTO public.clerk_schedule (day_of_week, hour_start, hour_end, active,  clerk_id) VALUES('Quarta-Feira', '08:00', '20:00', true, 'a2ce94d1-cdc7-407b-95ef-b928127bc234');
        INSERT INTO public.clerk_schedule (day_of_week, hour_start, hour_end, active,  clerk_id) VALUES('Quinta-Feira', '08:00', '20:00', true, 'a2ce94d1-cdc7-407b-95ef-b928127bc234');
        INSERT INTO public.clerk_schedule (day_of_week, hour_start, hour_end, active,  clerk_id) VALUES('Sexta-Feira', '08:00', '20:00', true, 'a2ce94d1-cdc7-407b-95ef-b928127bc234');
        INSERT INTO public.clerk_schedule (day_of_week, hour_start, hour_end, active,  clerk_id) VALUES('Sabado', '08:00', '20:00', true, 'a2ce94d1-cdc7-407b-95ef-b928127bc234');`,
            undefined,
        );

        // clerkSchedule - Gilberto
        await queryRunner.query(
            `
        INSERT INTO public.clerk_schedule (day_of_week, hour_start, hour_end, active,  clerk_id) VALUES('Segunda-Feira', '08:00', '20:00', true, '6869c80c-7631-484d-aca2-56a5b01200c1');
        INSERT INTO public.clerk_schedule (day_of_week, hour_start, hour_end, active,  clerk_id) VALUES('Terça-Feira', '08:00', '20:00', true, '6869c80c-7631-484d-aca2-56a5b01200c1');
        INSERT INTO public.clerk_schedule (day_of_week, hour_start, hour_end, active,  clerk_id) VALUES('Quarta-Feira', '08:00', '20:00', true, '6869c80c-7631-484d-aca2-56a5b01200c1');
        INSERT INTO public.clerk_schedule (day_of_week, hour_start, hour_end, active,  clerk_id) VALUES('Quinta-Feira', '08:00', '20:00', true, '6869c80c-7631-484d-aca2-56a5b01200c1');
        INSERT INTO public.clerk_schedule (day_of_week, hour_start, hour_end, active,  clerk_id) VALUES('Sexta-Feira', '08:00', '20:00', true, '6869c80c-7631-484d-aca2-56a5b01200c1');
        INSERT INTO public.clerk_schedule (day_of_week, hour_start, hour_end, active,  clerk_id) VALUES('Sabado', '08:00', '20:00', true, '6869c80c-7631-484d-aca2-56a5b01200c1');`,
            undefined,
        );

        // clerkSchedule - Joao
        await queryRunner.query(
            `
        INSERT INTO public.clerk_schedule (day_of_week, hour_start, hour_end, active,  clerk_id) VALUES('Segunda-Feira', '08:00', '20:00', true, '18d8ab24-6214-4110-bf5e-7d421cbf1112');
        INSERT INTO public.clerk_schedule (day_of_week, hour_start, hour_end, active,  clerk_id) VALUES('Terça-Feira', '08:00', '20:00', true, '18d8ab24-6214-4110-bf5e-7d421cbf1112');
        INSERT INTO public.clerk_schedule (day_of_week, hour_start, hour_end, active,  clerk_id) VALUES('Quarta-Feira', '08:00', '20:00', true, '18d8ab24-6214-4110-bf5e-7d421cbf1112');
        INSERT INTO public.clerk_schedule (day_of_week, hour_start, hour_end, active,  clerk_id) VALUES('Quinta-Feira', '08:00', '20:00', true, '18d8ab24-6214-4110-bf5e-7d421cbf1112');
        INSERT INTO public.clerk_schedule (day_of_week, hour_start, hour_end, active,  clerk_id) VALUES('Sexta-Feira', '08:00', '20:00', true, '18d8ab24-6214-4110-bf5e-7d421cbf1112');
        INSERT INTO public.clerk_schedule (day_of_week, hour_start, hour_end, active,  clerk_id) VALUES('Sabado', '08:00', '20:00', true, '18d8ab24-6214-4110-bf5e-7d421cbf1112');`,
            undefined,
        );

        // clerkSchedule - Tiago
        await queryRunner.query(
            `
        INSERT INTO public.clerk_schedule (day_of_week, hour_start, hour_end, active,  clerk_id) VALUES('Segunda-Feira', '08:00', '20:00', true, '2c089e42-dc6b-4107-9f6c-047a4ee45e3e');
        INSERT INTO public.clerk_schedule (day_of_week, hour_start, hour_end, active,  clerk_id) VALUES('Terça-Feira', '08:00', '20:00', true, '2c089e42-dc6b-4107-9f6c-047a4ee45e3e');
        INSERT INTO public.clerk_schedule (day_of_week, hour_start, hour_end, active,  clerk_id) VALUES('Quarta-Feira', '08:00', '20:00', true, '2c089e42-dc6b-4107-9f6c-047a4ee45e3e');
        INSERT INTO public.clerk_schedule (day_of_week, hour_start, hour_end, active,  clerk_id) VALUES('Quinta-Feira', '08:00', '20:00', true, '2c089e42-dc6b-4107-9f6c-047a4ee45e3e');
        INSERT INTO public.clerk_schedule (day_of_week, hour_start, hour_end, active,  clerk_id) VALUES('Sexta-Feira', '08:00', '20:00', true, '2c089e42-dc6b-4107-9f6c-047a4ee45e3e');
        INSERT INTO public.clerk_schedule (day_of_week, hour_start, hour_end, active,  clerk_id) VALUES('Sabado', '08:00', '20:00', true, '2c089e42-dc6b-4107-9f6c-047a4ee45e3e');`,
            undefined,
        );

        // clerkSchedule - Pedro
        await queryRunner.query(
            `
        INSERT INTO public.clerk_schedule (day_of_week, hour_start, hour_end, active,  clerk_id) VALUES('Segunda-Feira', '08:00', '20:00', true, '5c6d2979-0c83-4379-8929-1435c67c539e');
        INSERT INTO public.clerk_schedule (day_of_week, hour_start, hour_end, active,  clerk_id) VALUES('Terça-Feira', '08:00', '20:00', true, '5c6d2979-0c83-4379-8929-1435c67c539e');
        INSERT INTO public.clerk_schedule (day_of_week, hour_start, hour_end, active,  clerk_id) VALUES('Quarta-Feira', '08:00', '20:00', true, '5c6d2979-0c83-4379-8929-1435c67c539e');
        INSERT INTO public.clerk_schedule (day_of_week, hour_start, hour_end, active,  clerk_id) VALUES('Quinta-Feira', '08:00', '20:00', true, '5c6d2979-0c83-4379-8929-1435c67c539e');
        INSERT INTO public.clerk_schedule (day_of_week, hour_start, hour_end, active,  clerk_id) VALUES('Sexta-Feira', '08:00', '20:00', true, '5c6d2979-0c83-4379-8929-1435c67c539e');
        INSERT INTO public.clerk_schedule (day_of_week, hour_start, hour_end, active,  clerk_id) VALUES('Sabado', '08:00', '20:00', true, '5c6d2979-0c83-4379-8929-1435c67c539e');`,
            undefined,
        );

        // clerkSchedule - Jonas
        await queryRunner.query(
            `
        INSERT INTO public.clerk_schedule (day_of_week, hour_start, hour_end, active,  clerk_id) VALUES('Segunda-Feira', '08:00', '20:00', true, 'b5cfebd4-98ac-4bea-a2ca-8b8b38ad94a1');
        INSERT INTO public.clerk_schedule (day_of_week, hour_start, hour_end, active,  clerk_id) VALUES('Terça-Feira', '08:00', '20:00', true, 'b5cfebd4-98ac-4bea-a2ca-8b8b38ad94a1');
        INSERT INTO public.clerk_schedule (day_of_week, hour_start, hour_end, active,  clerk_id) VALUES('Quarta-Feira', '08:00', '20:00', true, 'b5cfebd4-98ac-4bea-a2ca-8b8b38ad94a1');
        INSERT INTO public.clerk_schedule (day_of_week, hour_start, hour_end, active,  clerk_id) VALUES('Quinta-Feira', '08:00', '20:00', true, 'b5cfebd4-98ac-4bea-a2ca-8b8b38ad94a1');
        INSERT INTO public.clerk_schedule (day_of_week, hour_start, hour_end, active,  clerk_id) VALUES('Sexta-Feira', '08:00', '20:00', true, 'b5cfebd4-98ac-4bea-a2ca-8b8b38ad94a1');
        INSERT INTO public.clerk_schedule (day_of_week, hour_start, hour_end, active,  clerk_id) VALUES('Sabado', '08:00', '20:00', true, 'b5cfebd4-98ac-4bea-a2ca-8b8b38ad94a1');`,
            undefined,
        );

        // clerkSchedule - Neynmar
        await queryRunner.query(
            `
        INSERT INTO public.clerk_schedule (day_of_week, hour_start, hour_end, active,  clerk_id) VALUES('Segunda-Feira', '08:00', '20:00', true, '270a8874-233f-4241-90a1-1ddc3ab58179');
        INSERT INTO public.clerk_schedule (day_of_week, hour_start, hour_end, active,  clerk_id) VALUES('Terça-Feira', '08:00', '20:00', true, '270a8874-233f-4241-90a1-1ddc3ab58179');
        INSERT INTO public.clerk_schedule (day_of_week, hour_start, hour_end, active,  clerk_id) VALUES('Quarta-Feira', '08:00', '20:00', true, '270a8874-233f-4241-90a1-1ddc3ab58179');
        INSERT INTO public.clerk_schedule (day_of_week, hour_start, hour_end, active,  clerk_id) VALUES('Quinta-Feira', '08:00', '20:00', true, '270a8874-233f-4241-90a1-1ddc3ab58179');
        INSERT INTO public.clerk_schedule (day_of_week, hour_start, hour_end, active,  clerk_id) VALUES('Sexta-Feira', '08:00', '20:00', true, '270a8874-233f-4241-90a1-1ddc3ab58179');
        INSERT INTO public.clerk_schedule (day_of_week, hour_start, hour_end, active,  clerk_id) VALUES('Sabado', '08:00', '20:00', true, '270a8874-233f-4241-90a1-1ddc3ab58179');`,
            undefined,
        );

        // clerkSchedule - Felipe
        await queryRunner.query(
            `
        INSERT INTO public.clerk_schedule (day_of_week, hour_start, hour_end, active,  clerk_id) VALUES('Segunda-Feira', '08:00', '20:00', true, '08dbe406-7124-4beb-a77e-204864904065');
        INSERT INTO public.clerk_schedule (day_of_week, hour_start, hour_end, active,  clerk_id) VALUES('Terça-Feira', '08:00', '20:00', true, '08dbe406-7124-4beb-a77e-204864904065');
        INSERT INTO public.clerk_schedule (day_of_week, hour_start, hour_end, active,  clerk_id) VALUES('Quarta-Feira', '08:00', '20:00', true, '08dbe406-7124-4beb-a77e-204864904065');
        INSERT INTO public.clerk_schedule (day_of_week, hour_start, hour_end, active,  clerk_id) VALUES('Quinta-Feira', '08:00', '20:00', true, '08dbe406-7124-4beb-a77e-204864904065');
        INSERT INTO public.clerk_schedule (day_of_week, hour_start, hour_end, active,  clerk_id) VALUES('Sexta-Feira', '08:00', '20:00', true, '08dbe406-7124-4beb-a77e-204864904065');
        INSERT INTO public.clerk_schedule (day_of_week, hour_start, hour_end, active,  clerk_id) VALUES('Sabado', '08:00', '20:00', true, '08dbe406-7124-4beb-a77e-204864904065');`,
            undefined,
        );

        // clerkSchedule - Casemiro
        await queryRunner.query(
            `
        INSERT INTO public.clerk_schedule (day_of_week, hour_start, hour_end, active,  clerk_id) VALUES('Segunda-Feira', '08:00', '20:00', true, '7b317e61-c70b-46ff-8e6b-3f1bd1f5bd37');
        INSERT INTO public.clerk_schedule (day_of_week, hour_start, hour_end, active,  clerk_id) VALUES('Terça-Feira', '08:00', '20:00', true, '7b317e61-c70b-46ff-8e6b-3f1bd1f5bd37');
        INSERT INTO public.clerk_schedule (day_of_week, hour_start, hour_end, active,  clerk_id) VALUES('Quarta-Feira', '08:00', '20:00', true, '7b317e61-c70b-46ff-8e6b-3f1bd1f5bd37');
        INSERT INTO public.clerk_schedule (day_of_week, hour_start, hour_end, active,  clerk_id) VALUES('Quinta-Feira', '08:00', '20:00', true, '7b317e61-c70b-46ff-8e6b-3f1bd1f5bd37');
        INSERT INTO public.clerk_schedule (day_of_week, hour_start, hour_end, active,  clerk_id) VALUES('Sexta-Feira', '08:00', '20:00', true, '7b317e61-c70b-46ff-8e6b-3f1bd1f5bd37');
        INSERT INTO public.clerk_schedule (day_of_week, hour_start, hour_end, active,  clerk_id) VALUES('Sabado', '08:00', '20:00', true, '7b317e61-c70b-46ff-8e6b-3f1bd1f5bd37');`,
            undefined,
        );

        // clerkSchedule - Alisson
        await queryRunner.query(
            `
        INSERT INTO public.clerk_schedule (day_of_week, hour_start, hour_end, active,  clerk_id) VALUES('Segunda-Feira', '08:00', '20:00', true, 'e22d8e40-8c99-44eb-abcc-a37c20d91262');
        INSERT INTO public.clerk_schedule (day_of_week, hour_start, hour_end, active,  clerk_id) VALUES('Terça-Feira', '08:00', '20:00', true, 'e22d8e40-8c99-44eb-abcc-a37c20d91262');
        INSERT INTO public.clerk_schedule (day_of_week, hour_start, hour_end, active,  clerk_id) VALUES('Quarta-Feira', '08:00', '20:00', true, 'e22d8e40-8c99-44eb-abcc-a37c20d91262');
        INSERT INTO public.clerk_schedule (day_of_week, hour_start, hour_end, active,  clerk_id) VALUES('Quinta-Feira', '08:00', '20:00', true, 'e22d8e40-8c99-44eb-abcc-a37c20d91262');
        INSERT INTO public.clerk_schedule (day_of_week, hour_start, hour_end, active,  clerk_id) VALUES('Sexta-Feira', '08:00', '20:00', true, 'e22d8e40-8c99-44eb-abcc-a37c20d91262');
        INSERT INTO public.clerk_schedule (day_of_week, hour_start, hour_end, active,  clerk_id) VALUES('Sabado', '08:00', '20:00', true, 'e22d8e40-8c99-44eb-abcc-a37c20d91262');`,
            undefined,
        );

        // clerkSchedule - Rafinha
        await queryRunner.query(
            `
        INSERT INTO public.clerk_schedule (day_of_week, hour_start, hour_end, active,  clerk_id) VALUES('Segunda-Feira', '08:00', '20:00', true, 'ce621080-566c-4a73-89a1-b41d2a06cbfd');
        INSERT INTO public.clerk_schedule (day_of_week, hour_start, hour_end, active,  clerk_id) VALUES('Terça-Feira', '08:00', '20:00', true, 'ce621080-566c-4a73-89a1-b41d2a06cbfd');
        INSERT INTO public.clerk_schedule (day_of_week, hour_start, hour_end, active,  clerk_id) VALUES('Quarta-Feira', '08:00', '20:00', true, 'ce621080-566c-4a73-89a1-b41d2a06cbfd');
        INSERT INTO public.clerk_schedule (day_of_week, hour_start, hour_end, active,  clerk_id) VALUES('Quinta-Feira', '08:00', '20:00', true, 'ce621080-566c-4a73-89a1-b41d2a06cbfd');
        INSERT INTO public.clerk_schedule (day_of_week, hour_start, hour_end, active,  clerk_id) VALUES('Sexta-Feira', '08:00', '20:00', true, 'ce621080-566c-4a73-89a1-b41d2a06cbfd');
        INSERT INTO public.clerk_schedule (day_of_week, hour_start, hour_end, active,  clerk_id) VALUES('Sabado', '08:00', '20:00', true, 'ce621080-566c-4a73-89a1-b41d2a06cbfd');`,
            undefined,
        );

        // clerkSchedule - Leo Gamalho
        await queryRunner.query(
            `
        INSERT INTO public.clerk_schedule (day_of_week, hour_start, hour_end, active,  clerk_id) VALUES('Segunda-Feira', '08:00', '20:00', true, '58080704-8484-4fb4-a1aa-da4558b9b59d');
        INSERT INTO public.clerk_schedule (day_of_week, hour_start, hour_end, active,  clerk_id) VALUES('Terça-Feira', '08:00', '20:00', true, '58080704-8484-4fb4-a1aa-da4558b9b59d');
        INSERT INTO public.clerk_schedule (day_of_week, hour_start, hour_end, active,  clerk_id) VALUES('Quarta-Feira', '08:00', '20:00', true, '58080704-8484-4fb4-a1aa-da4558b9b59d');
        INSERT INTO public.clerk_schedule (day_of_week, hour_start, hour_end, active,  clerk_id) VALUES('Quinta-Feira', '08:00', '20:00', true, '58080704-8484-4fb4-a1aa-da4558b9b59d');
        INSERT INTO public.clerk_schedule (day_of_week, hour_start, hour_end, active,  clerk_id) VALUES('Sexta-Feira', '08:00', '20:00', true, '58080704-8484-4fb4-a1aa-da4558b9b59d');
        INSERT INTO public.clerk_schedule (day_of_week, hour_start, hour_end, active,  clerk_id) VALUES('Sabado', '08:00', '20:00', true, '58080704-8484-4fb4-a1aa-da4558b9b59d');`,
            undefined,
        );

        // clerkSchedule - Anderson Silva
        await queryRunner.query(
            `
        INSERT INTO public.clerk_schedule (day_of_week, hour_start, hour_end, active,  clerk_id) VALUES('Segunda-Feira', '08:00', '20:00', true, 'd409e99d-512b-4ce7-9ff4-30da45d2711f');
        INSERT INTO public.clerk_schedule (day_of_week, hour_start, hour_end, active,  clerk_id) VALUES('Terça-Feira', '08:00', '20:00', true, 'd409e99d-512b-4ce7-9ff4-30da45d2711f');
        INSERT INTO public.clerk_schedule (day_of_week, hour_start, hour_end, active,  clerk_id) VALUES('Quarta-Feira', '08:00', '20:00', true, 'd409e99d-512b-4ce7-9ff4-30da45d2711f');
        INSERT INTO public.clerk_schedule (day_of_week, hour_start, hour_end, active,  clerk_id) VALUES('Quinta-Feira', '08:00', '20:00', true, 'd409e99d-512b-4ce7-9ff4-30da45d2711f');
        INSERT INTO public.clerk_schedule (day_of_week, hour_start, hour_end, active,  clerk_id) VALUES('Sexta-Feira', '08:00', '20:00', true, 'd409e99d-512b-4ce7-9ff4-30da45d2711f');
        INSERT INTO public.clerk_schedule (day_of_week, hour_start, hour_end, active,  clerk_id) VALUES('Sabado', '08:00', '20:00', true, 'd409e99d-512b-4ce7-9ff4-30da45d2711f');`,
            undefined,
        );

        // clerkSchedule - Maria de Lurdes
        await queryRunner.query(
            `
        INSERT INTO public.clerk_schedule (day_of_week, hour_start, hour_end, active,  clerk_id) VALUES('Segunda-Feira', '08:00', '20:00', true, 'b3d8fb8c-e68f-46de-a799-2cd2563279f9');
        INSERT INTO public.clerk_schedule (day_of_week, hour_start, hour_end, active,  clerk_id) VALUES('Terça-Feira', '08:00', '20:00', true, 'b3d8fb8c-e68f-46de-a799-2cd2563279f9');
        INSERT INTO public.clerk_schedule (day_of_week, hour_start, hour_end, active,  clerk_id) VALUES('Quarta-Feira', '08:00', '20:00', true, 'b3d8fb8c-e68f-46de-a799-2cd2563279f9');
        INSERT INTO public.clerk_schedule (day_of_week, hour_start, hour_end, active,  clerk_id) VALUES('Quinta-Feira', '08:00', '20:00', true, 'b3d8fb8c-e68f-46de-a799-2cd2563279f9');
        INSERT INTO public.clerk_schedule (day_of_week, hour_start, hour_end, active,  clerk_id) VALUES('Sexta-Feira', '08:00', '20:00', true, 'b3d8fb8c-e68f-46de-a799-2cd2563279f9');
        INSERT INTO public.clerk_schedule (day_of_week, hour_start, hour_end, active,  clerk_id) VALUES('Sabado', '08:00', '20:00', true, 'b3d8fb8c-e68f-46de-a799-2cd2563279f9');`,
            undefined,
        );

        // clerkSchedule - Marcos
        await queryRunner.query(
            `
        INSERT INTO public.clerk_schedule (day_of_week, hour_start, hour_end, active,  clerk_id) VALUES('Segunda-Feira', '08:00', '20:00', true, '0e48c7f8-a1c1-4f67-8db1-39705e940ce4');
        INSERT INTO public.clerk_schedule (day_of_week, hour_start, hour_end, active,  clerk_id) VALUES('Terça-Feira', '08:00', '20:00', true, '0e48c7f8-a1c1-4f67-8db1-39705e940ce4');
        INSERT INTO public.clerk_schedule (day_of_week, hour_start, hour_end, active,  clerk_id) VALUES('Quarta-Feira', '08:00', '20:00', true, '0e48c7f8-a1c1-4f67-8db1-39705e940ce4');
        INSERT INTO public.clerk_schedule (day_of_week, hour_start, hour_end, active,  clerk_id) VALUES('Quinta-Feira', '08:00', '20:00', true, '0e48c7f8-a1c1-4f67-8db1-39705e940ce4');
        INSERT INTO public.clerk_schedule (day_of_week, hour_start, hour_end, active,  clerk_id) VALUES('Sexta-Feira', '08:00', '20:00', true, '0e48c7f8-a1c1-4f67-8db1-39705e940ce4');
        INSERT INTO public.clerk_schedule (day_of_week, hour_start, hour_end, active,  clerk_id) VALUES('Sabado', '08:00', '20:00', true, '0e48c7f8-a1c1-4f67-8db1-39705e940ce4');`,
            undefined,
        );

        // clerkSchedule - Roberto
        await queryRunner.query(
            `
        INSERT INTO public.clerk_schedule (day_of_week, hour_start, hour_end, active,  clerk_id) VALUES('Segunda-Feira', '08:00', '20:00', true, '89b62a3d-3515-489f-b2be-a26e29fe4c14');
        INSERT INTO public.clerk_schedule (day_of_week, hour_start, hour_end, active,  clerk_id) VALUES('Terça-Feira', '08:00', '20:00', true, '89b62a3d-3515-489f-b2be-a26e29fe4c14');
        INSERT INTO public.clerk_schedule (day_of_week, hour_start, hour_end, active,  clerk_id) VALUES('Quarta-Feira', '08:00', '20:00', true, '89b62a3d-3515-489f-b2be-a26e29fe4c14');
        INSERT INTO public.clerk_schedule (day_of_week, hour_start, hour_end, active,  clerk_id) VALUES('Quinta-Feira', '08:00', '20:00', true, '89b62a3d-3515-489f-b2be-a26e29fe4c14');
        INSERT INTO public.clerk_schedule (day_of_week, hour_start, hour_end, active,  clerk_id) VALUES('Sexta-Feira', '08:00', '20:00', true, '89b62a3d-3515-489f-b2be-a26e29fe4c14');
        INSERT INTO public.clerk_schedule (day_of_week, hour_start, hour_end, active,  clerk_id) VALUES('Sabado', '08:00', '20:00', true, '89b62a3d-3515-489f-b2be-a26e29fe4c14');`,
            undefined,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        console.log(queryRunner);
    }
}
