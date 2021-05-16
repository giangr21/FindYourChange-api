import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedServices1621182453760 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<any> {
        // Services - Max
        await queryRunner.query(
            `
    INSERT INTO public.services (title,description,value,provider_id,disccount,"time",category,"isPopularService") VALUES ('Tatuagem no estilo pontilhismo','Pontilhismo médio (15cm)',500,'1de7c7d5-9394-46de-877e-0d8f241a4ca8',0,'120','Tatuagem',true);
    INSERT INTO public.services (title,description,value,provider_id,disccount,"time",category,"isPopularService") VALUES ('Tatuagem Old School','Old school tamanho médio (20cm)', 500, '1de7c7d5-9394-46de-877e-0d8f241a4ca8',0,'120','Tatuagem',true);
    INSERT INTO public.services (title,description,value,provider_id,disccount,"time",category,"isPopularService") VALUES ('Tatuagem Pequena 20cm geométrico','Tatuagem Pequena 20cm geométrico',400,'1de7c7d5-9394-46de-877e-0d8f241a4ca8',0,'60','Tatuagem',false);
    INSERT INTO public.services (title,description,value,provider_id,disccount,"time",category,"isPopularService") VALUES ('Tatuagem minimalista 10cm P&B','Tatuagem pequena 10cm',250,'1de7c7d5-9394-46de-877e-0d8f241a4ca8',0,'60','Tatuagem',false);
    INSERT INTO public.services (title,description,value,provider_id,disccount,"time",category,"isPopularService") VALUES ('Tatuagem minimalista 10cm P&B','Tatuagem pequena 10cm',250,'1de7c7d5-9394-46de-877e-0d8f241a4ca8',0,'60','Tatuagem',false);
    INSERT INTO public.services (title,description,value,provider_id,disccount,"time",category,"isPopularService") VALUES ('Tatuagem blackwork 30cm','Tatuagem média 30cm',500,'1de7c7d5-9394-46de-877e-0d8f241a4ca8',0,'120','Tatuagem',false);
    INSERT INTO public.services (title,description,value,provider_id,disccount,"time",category,"isPopularService") VALUES ('Tatuagem singleline 20cm','Tatuagem média singleline',400,'1de7c7d5-9394-46de-877e-0d8f241a4ca8',0,'60','Tatuagem',false);
    INSERT INTO public.services (title,description,value,provider_id,disccount,"time",category,"isPopularService") VALUES ('Tatuagem glitch 40cm P&B','Tatuagem grande 40cm',1200,'1de7c7d5-9394-46de-877e-0d8f241a4ca8',0,'180','Tatuagem',true);
    INSERT INTO public.services (title,description,value,provider_id,disccount,"time",category,"isPopularService") VALUES ('Tatuagem tinta vermelha 20cm','Tatuagem média 20cm',250,'1de7c7d5-9394-46de-877e-0d8f241a4ca8',0,'120','Tatuagem',false);
    INSERT INTO public.services (title,description,value,provider_id,disccount,"time",category,"isPopularService") VALUES ('Tatuagem sem contorno 20cm','Tatuagem média 20cm',500,'1de7c7d5-9394-46de-877e-0d8f241a4ca8',0,'120','Tatuagem',true);`,
            undefined,
        );

        // Services - Roberto
        await queryRunner.query(
            `
    INSERT INTO public.services (title,description,value,provider_id,disccount,"time",category,"isPopularService") VALUES ('Corte + Luzes','Corte + Luzes cabelo curto/médio',100,'3b1c2b10-eab0-4095-9535-116543fd23c7',0,'90','Barbearia',true);
    INSERT INTO public.services (title,description,value,provider_id,disccount,"time",category,"isPopularService") VALUES ('Corte Blindado','Corte + blindado',60,'3b1c2b10-eab0-4095-9535-116543fd23c7',0,'60','Barbearia',true);
    INSERT INTO public.services (title,description,value,provider_id,disccount,"time",category,"isPopularService") VALUES ('Corte e Barba + Alisamento','Corte cabelo e barba + alisamento',70,'3b1c2b10-eab0-4095-9535-116543fd23c7',0,'60','Barbearia',true);
    INSERT INTO public.services (title,description,value,provider_id,disccount,"time",category,"isPopularService") VALUES ('Corte penteado','Corte + penteado',40,'3b1c2b10-eab0-4095-9535-116543fd23c7',0,'50','Barbearia',false);
    INSERT INTO public.services (title,description,value,provider_id,disccount,"time",category,"isPopularService") VALUES ('Luzes','Luzes no cabelo',70,'3b1c2b10-eab0-4095-9535-116543fd23c7',0,'90','Barbearia',false);
    INSERT INTO public.services (title,description,value,provider_id,disccount,"time",category,"isPopularService") VALUES ('Pézinho','Pézinho no cabelo',10,'3b1c2b10-eab0-4095-9535-116543fd23c7',0,'30','Barbearia',false);
    INSERT INTO public.services (title,description,value,provider_id,disccount,"time",category,"isPopularService") VALUES ('Trança','Trança cabelo médio/grande até 40cm',90,'3b1c2b10-eab0-4095-9535-116543fd23c7',0,'90','Barbearia',false);
    INSERT INTO public.services (title,description,value,provider_id,disccount,"time",category,"isPopularService") VALUES ('Trança + Barba','Trança (Cabelo até 40cm) + Barba',100,'3b1c2b10-eab0-4095-9535-116543fd23c7',0,'90','Barbearia',false);
    INSERT INTO public.services (title,description,value,provider_id,disccount,"time",category,"isPopularService") VALUES ('Trança Lateral','Trança lateral (Cabelo até 40cm)',30,'3b1c2b10-eab0-4095-9535-116543fd23c7',0,'30','Barbearia',false);
    INSERT INTO public.services (title,description,value,provider_id,disccount,"time",category,"isPopularService") VALUES ('Trança Tiara','Trança tiara (Cabelo até 40cm)',50,'3b1c2b10-eab0-4095-9535-116543fd23c7',10,'60','Barbearia',false);`,
            undefined,
        );

        // Services - Joao
        await queryRunner.query(
            `
    INSERT INTO public.services (title,description,value,provider_id,disccount,"time",category,"isPopularService") VALUES ('Tatuagem no estilo pontilhismo','Pontilhismo médio (15cm)',500,'3d60d508-f201-4e60-8a7e-674a933c2987',0,'120','Tatuagem',false);
    INSERT INTO public.services (title,description,value,provider_id,disccount,"time",category,"isPopularService") VALUES ('Tatuagem Old School','Old school tamanho médio (20cm)', 500,'3d60d508-f201-4e60-8a7e-674a933c2987',0,'120','Tatuagem',false);
    INSERT INTO public.services (title,description,value,provider_id,disccount,"time",category,"isPopularService") VALUES ('Tatuagem Pequena 20cm geométrico','Tatuagem Pequena 20cm geométrico',400,'3d60d508-f201-4e60-8a7e-674a933c2987',0,'60','Tatuagem',true);
    INSERT INTO public.services (title,description,value,provider_id,disccount,"time",category,"isPopularService") VALUES ('Tatuagem minimalista 10cm P&B','Tatuagem pequena 10cm',250,'3d60d508-f201-4e60-8a7e-674a933c2987',0,'60','Tatuagem',true);
    INSERT INTO public.services (title,description,value,provider_id,disccount,"time",category,"isPopularService") VALUES ('Tatuagem minimalista 10cm P&B','Tatuagem pequena 10cm',250,'3d60d508-f201-4e60-8a7e-674a933c2987',0,'60','Tatuagem',true);
    INSERT INTO public.services (title,description,value,provider_id,disccount,"time",category,"isPopularService") VALUES ('Tatuagem blackwork 30cm','Tatuagem média 30cm',500,'3d60d508-f201-4e60-8a7e-674a933c2987',0,'120','Tatuagem',true);
    INSERT INTO public.services (title,description,value,provider_id,disccount,"time",category,"isPopularService") VALUES ('Tatuagem singleline 20cm','Tatuagem média singleline',400,'3d60d508-f201-4e60-8a7e-674a933c2987',0,'60','Tatuagem',false);
    INSERT INTO public.services (title,description,value,provider_id,disccount,"time",category,"isPopularService") VALUES ('Tatuagem glitch 40cm P&B','Tatuagem grande 40cm',1200,'3d60d508-f201-4e60-8a7e-674a933c2987',0,'180','Tatuagem',false);
    INSERT INTO public.services (title,description,value,provider_id,disccount,"time",category,"isPopularService") VALUES ('Tatuagem tinta vermelha 20cm','Tatuagem média 20cm',250,'3d60d508-f201-4e60-8a7e-674a933c2987',0,'120','Tatuagem',false);
    INSERT INTO public.services (title,description,value,provider_id,disccount,"time",category,"isPopularService") VALUES ('Tatuagem sem contorno 20cm','Tatuagem média 20cm',500,'3d60d508-f201-4e60-8a7e-674a933c2987',0,'120','Tatuagem',false);`,
            undefined,
        );

        // Services - Gian
        await queryRunner.query(
            `
    INSERT INTO public.services (title,description,value,provider_id,disccount,"time",category,"isPopularService") VALUES ('Corte e Barba + Alisamento','Corte cabelo e barba + alisamento',70,'4bdcb606-94d4-414c-86a2-3bc722c36580',0,'60','Barbearia',true);
    INSERT INTO public.services (title,description,value,provider_id,disccount,"time",category,"isPopularService") VALUES ('Corte penteado','Corte + penteado',40,'4bdcb606-94d4-414c-86a2-3bc722c36580',0,'50','Barbearia',false);
    INSERT INTO public.services (title,description,value,provider_id,disccount,"time",category,"isPopularService") VALUES ('Luzes','Luzes no cabelo',70,'4bdcb606-94d4-414c-86a2-3bc722c36580',0,'90','Barbearia',false);
    INSERT INTO public.services (title,description,value,provider_id,disccount,"time",category,"isPopularService") VALUES ('Pézinho','Pézinho no cabelo',10,'4bdcb606-94d4-414c-86a2-3bc722c36580',0,'30','Barbearia',false);
    INSERT INTO public.services (title,description,value,provider_id,disccount,"time",category,"isPopularService") VALUES ('Tatuagem minimalista 10cm P&B','Tatuagem pequena 10cm',250,'4bdcb606-94d4-414c-86a2-3bc722c36580',0,'60','Tatuagem',true);
    INSERT INTO public.services (title,description,value,provider_id,disccount,"time",category,"isPopularService") VALUES ('Tatuagem blackwork 30cm','Tatuagem média 30cm',500,'4bdcb606-94d4-414c-86a2-3bc722c36580',0,'120','Tatuagem',true);
    INSERT INTO public.services (title,description,value,provider_id,disccount,"time",category,"isPopularService") VALUES ('Tatuagem singleline 20cm','Tatuagem média singleline',400,'4bdcb606-94d4-414c-86a2-3bc722c36580',0,'60','Tatuagem',false);
    INSERT INTO public.services (title,description,value,provider_id,disccount,"time",category,"isPopularService") VALUES ('Tatuagem glitch 40cm P&B','Tatuagem grande 40cm',1200,'4bdcb606-94d4-414c-86a2-3bc722c36580',0,'180','Tatuagem',false);
    INSERT INTO public.services (title,description,value,provider_id,disccount,"time",category,"isPopularService") VALUES ('Cabelo&Barba','Corte de cabelo e barba',70,'4bdcb606-94d4-414c-86a2-3bc722c36580',10,'60','Barbearia',true);`,
            undefined,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        console.log(queryRunner);
    }
}
