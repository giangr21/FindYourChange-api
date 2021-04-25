import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedDataBase1619136649400 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<any> {
        // Users
        await queryRunner.query(
            `
        INSERT INTO public."user" ("name",last_name,phone,email,"password") VALUES ('Alfredo','Cardoso','41998563201','alfredocardoso@gmail.com','$2a$08$rc1asRe0QpxVO8g9VeYvcOu5MUpWd7VzMs9TrumEPD0t7dUVZDb9S');
        INSERT INTO public."user" ("name",last_name,phone,email,"password") VALUES ('Carlos','Pereira','41998563202','carlospereira@gmail.com','$2a$08$rc1asRe0QpxVO8g9VeYvcOu5MUpWd7VzMs9TrumEPD0t7dUVZDb9S');
        INSERT INTO public."user" ("name",last_name,phone,email,"password") VALUES ('Michael','Bonfim','41998563203','michaelbonfim@gmail.com','$2a$08$rc1asRe0QpxVO8g9VeYvcOu5MUpWd7VzMs9TrumEPD0t7dUVZDb9S');
        INSERT INTO public."user" ("name",last_name,phone,email,"password") VALUES ('Matheus','Rocco','41998563204','matheusrocco@gmail.com','$2a$08$rc1asRe0QpxVO8g9VeYvcOu5MUpWd7VzMs9TrumEPD0t7dUVZDb9S');
        INSERT INTO public."user" ("name",last_name,phone,email,"password") VALUES ('John','Mayer','41998563205','johnmayer@gmail.com','$2a$08$rc1asRe0QpxVO8g9VeYvcOu5MUpWd7VzMs9TrumEPD0t7dUVZDb9S');
        INSERT INTO public."user" ("name",last_name,phone,email,"password") VALUES ('Tiago','Schneider','41998563206','tiagoschneider@gmail.com','$2a$08$rc1asRe0QpxVO8g9VeYvcOu5MUpWd7VzMs9TrumEPD0t7dUVZDb9S');
        INSERT INTO public."user" ("name",last_name,phone,email,"password") VALUES ('Willian','Bonner','41998563207','willianbonner@gmail.com','$2a$08$rc1asRe0QpxVO8g9VeYvcOu5MUpWd7VzMs9TrumEPD0t7dUVZDb9S');
        INSERT INTO public."user" ("name",last_name,phone,email,"password") VALUES ('Gian','Brilhador','41998563208','gianbrilhador@gmail.com','$2a$08$rc1asRe0QpxVO8g9VeYvcOu5MUpWd7VzMs9TrumEPD0t7dUVZDb9S');
        INSERT INTO public."user" ("name",last_name,phone,email,"password") VALUES ('Gustavo','Vasconcelos','41998563209','gustavovasconcelos@gmail.com','$2a$08$rc1asRe0QpxVO8g9VeYvcOu5MUpWd7VzMs9TrumEPD0t7dUVZDb9S');
        INSERT INTO public."user" ("name",last_name,phone,email,"password") VALUES ('Wesley','Ofoda','41998563232','wesleyofoda@gmail.com','$2a$08$rc1asRe0QpxVO8g9VeYvcOu5MUpWd7VzMs9TrumEPD0t7dUVZDb9S');`,
            undefined,
        );

        // Produtos - (Max Vorax) User
        await queryRunner.query(
            `
            INSERT INTO public.product (name,value,quantity,category,description,provider_id,product_status) VALUES ('Maquina Tatuagem x13','258.00','1','Tatuagem','Maquina tatuagem x13 rotativa','1de7c7d5-9394-46de-877e-0d8f241a4ca8','Novo');
            INSERT INTO public.product (name,value,quantity,category,description,provider_id,product_status) VALUES ('Caneta Aston Pen','1150.00','1','Tatuagem','Caneta Aston Pen Folon Preta Maquina Rotativa Tattoo','1de7c7d5-9394-46de-877e-0d8f241a4ca8','Usado');
            INSERT INTO public.product (name,value,quantity,category,description,provider_id,product_status) VALUES ('Protetor de Clip','60.75','1','Tatuagem','Protetor de Clip Cord + 2 Bandagem + 2 Protetor de Maquina','1de7c7d5-9394-46de-877e-0d8f241a4ca8','Novo');
            INSERT INTO public.product (name,value,quantity,category,description,provider_id,product_status) VALUES ('Alicate Body Piercing','59.75','1','BodyPiercing','Alicate Body Piercing para Fechar ou Abrir Captive','1de7c7d5-9394-46de-877e-0d8f241a4ca8','Novo');
            INSERT INTO public.product (name,value,quantity,category,description,provider_id,product_status) VALUES ('Agulha Body Piercing','188.00','100','BodyPiercing','Agulha Body Piercing Americana Precision - Caixa 100 unidades','1de7c7d5-9394-46de-877e-0d8f241a4ca8','Novo');
            INSERT INTO public.product (name,value,quantity,category,description,provider_id,product_status) VALUES ('Cartela Piercing Aço Cirurgico','44.90','10','BodyPiercing','Cartela Kit 42 Piercing Aço Cirurgico Modelo Variado','1de7c7d5-9394-46de-877e-0d8f241a4ca8','Novo');`,
            undefined,
        );

        // Produtos - (Roberto) User
        await queryRunner.query(
            `
            INSERT INTO public.product (name,value,quantity,category,description,provider_id,product_status) VALUES ('Kit 3und. Minoxidil','206.00','1','Barbearia','Kit 03 Unidades Minoxidil Kirkland 5%','3b1c2b10-eab0-4095-9535-116543fd23c7','Novo');
            INSERT INTO public.product (name,value,quantity,category,description,provider_id,product_status) VALUES ('Loção Balm para Barba','150.00','6','Barbearia','Kit com 6 Loção Balm para Barba - Óleo hidratante','3b1c2b10-eab0-4095-9535-116543fd23c7','Novo');
            INSERT INTO public.product (name,value,quantity,category,description,provider_id,product_status) VALUES ('Pente em Madeira','26.90','1','Barbearia','Pente em madeira barba forte 14cm','3b1c2b10-eab0-4095-9535-116543fd23c7','Novo');
            INSERT INTO public.product (name,value,quantity,category,description,provider_id,product_status) VALUES ('Strax Hinode Tatuagem','160.00','6','Tatuagem','Kit 6 Strax Hinode Tatuagens - Creme Hidratante','3b1c2b10-eab0-4095-9535-116543fd23c7','Novo');
            INSERT INTO public.product (name,value,quantity,category,description,provider_id,product_status) VALUES ('Kit Luvas Vinilflex','50.00','1','Tatuagem','Luvas para tatuar - Tamanho M - Preta S/Látex - 100 Unidades','3b1c2b10-eab0-4095-9535-116543fd23c7','Novo');
            INSERT INTO public.product (name,value,quantity,category,description,provider_id,product_status) VALUES ('Tinta Viper 120 ml','230.00','2','Tatuagem','Tinta Viper Ink Preto 120ml','3b1c2b10-eab0-4095-9535-116543fd23c7','Novo');`,
            undefined,
        );

        // Produtos - (Joao) User
        await queryRunner.query(
            `
            INSERT INTO public.product (name,value,quantity,category,description,provider_id,product_status) VALUES ('Tinta 3 Pigmentos','149.99','1','Tatuagem','3 Pigmentos Tinta Tatuagem Ink 30ml','3d60d508-f201-4e60-8a7e-674a933c2987','Novo');
            INSERT INTO public.product (name,value,quantity,category,description,provider_id,product_status) VALUES ('Batoque para Tinta descartavel','40.00','3','Tatuagem','Batoque para Tinta Descartavel 3 unidades.','3d60d508-f201-4e60-8a7e-674a933c2987','Novo');
            INSERT INTO public.product (name,value,quantity,category,description,provider_id,product_status) VALUES ('Kit 10 Biqueiras + 10 Agulhas','70.00','1','Tatuagem','Kit 10 Biqueiras + 10 Agulhas','3d60d508-f201-4e60-8a7e-674a933c2987','Novo');
            INSERT INTO public.product (name,value,quantity,category,description,provider_id,product_status) VALUES ('Maquina Cheyenne Hawk Thunder','4900.00','1','Tatuagem','Maquina de Tatuagem Cheyenne Hawk Thunder + Grip','3d60d508-f201-4e60-8a7e-674a933c2987','Usado');
            INSERT INTO public.product (name,value,quantity,category,description,provider_id,product_status) VALUES ('Dermógrafo Vena Micropigmentação','4.200','1','Tatuagem','Dermógrafo Vena micropigmentação Bio Evolution (Pouco uso)','3d60d508-f201-4e60-8a7e-674a933c2987','Usado');
            INSERT INTO public.product (name,value,quantity,category,description,provider_id,product_status) VALUES ('Pedal Tatuagem Caveira','98.90','1','Tatuagem','Pedal tatuagem caveira c/ fonte','3d60d508-f201-4e60-8a7e-674a933c2987','Usado');`,
            undefined,
        );

        // Produtos - (Gian) User
        await queryRunner.query(
            `
            INSERT INTO public.product (name,value,quantity,category,description,provider_id,product_status) VALUES ('Maquina de cortar cabelo','269.90','1','Barbearia','Maquina de cortar cabelo e barba - Wahl Pro Basic Branco','4bdcb606-94d4-414c-86a2-3bc722c36580','Usado');
            INSERT INTO public.product (name,value,quantity,category,description,provider_id,product_status) VALUES ('Espelho Cabeleireiro','37.99','1','Barbearia','Espelho de mão para cabeleireiro','4bdcb606-94d4-414c-86a2-3bc722c36580','Usado');
            INSERT INTO public.product (name,value,quantity,category,description,provider_id,product_status) VALUES ('Capa para Barba','33.49','1','Barbearia','Capa p/ barba ventosa (s/ sujar o banheiro)','4bdcb606-94d4-414c-86a2-3bc722c36580','Novo');
            INSERT INTO public.product (name,value,quantity,category,description,provider_id,product_status) VALUES ('Kit 30 esponjas Nudred','420.00','30','Barbearia','Kit 30 esponjas nudred original street c/ espelho','4bdcb606-94d4-414c-86a2-3bc722c36580','Usado');
            INSERT INTO public.product (name,value,quantity,category,description,provider_id,product_status) VALUES ('Pedal Tatuagem Nok','44.90','1','Tatuagem','Pedal Tatuagem Nok Modelo Pedaleira Tatto Pluf p10','4bdcb606-94d4-414c-86a2-3bc722c36580','Usado');
            INSERT INTO public.product (name,value,quantity,category,description,provider_id,product_status) VALUES ('Fonte de Tatuagem','149.90','1','Tatuagem','Fonte de Tatugem Digital + Clipcord de Brinde','4bdcb606-94d4-414c-86a2-3bc722c36580','Usado');`,
            undefined,
        );

        // Atendentes - Max
        await queryRunner.query(
            `
            INSERT INTO public.clerk ("name",email,phone,provider_id) VALUES ('Gilberto','gilberto@gmail.com','41899856263','1de7c7d5-9394-46de-877e-0d8f241a4ca8');
            INSERT INTO public.clerk ("name",email,phone,provider_id) VALUES ('Joao','joao@gmail.com','41899856263','1de7c7d5-9394-46de-877e-0d8f241a4ca8');
            INSERT INTO public.clerk ("name",email,phone,provider_id) VALUES ('Tiago','tiago@gmail.com','41899856263','1de7c7d5-9394-46de-877e-0d8f241a4ca8');`,
            undefined,
        );

        // Atendentes - Roberto
        await queryRunner.query(
            `
            INSERT INTO public.clerk ("name",email,phone,provider_id) VALUES ('Pedro','pedro@gmail.com','41899856263','3b1c2b10-eab0-4095-9535-116543fd23c7');
            INSERT INTO public.clerk ("name",email,phone,provider_id) VALUES ('Jonas','jonas@gmail.com','41899856263','3b1c2b10-eab0-4095-9535-116543fd23c7');
            INSERT INTO public.clerk ("name",email,phone,provider_id) VALUES ('Neymar','neymar@gmail.com','41899856263','3b1c2b10-eab0-4095-9535-116543fd23c7');`,
            undefined,
        );

        // Atendentes - João
        await queryRunner.query(
            `
            INSERT INTO public.clerk ("name",email,phone,provider_id) VALUES ('Felipe','felipe@gmail.com','41899856263','3d60d508-f201-4e60-8a7e-674a933c2987');
            INSERT INTO public.clerk ("name",email,phone,provider_id) VALUES ('Casemiro','casemiro@gmail.com','41899856263','3d60d508-f201-4e60-8a7e-674a933c2987');
            INSERT INTO public.clerk ("name",email,phone,provider_id) VALUES ('Alisson','alisson@gmail.com','41899856263','3d60d508-f201-4e60-8a7e-674a933c2987');`,
            undefined,
        );

        // Atendentes - Gian
        await queryRunner.query(
            `
            INSERT INTO public.clerk ("name",email,phone,provider_id) VALUES ('Rafinha','rafinha@gmail.com','41899856263','4bdcb606-94d4-414c-86a2-3bc722c36580');
            INSERT INTO public.clerk ("name",email,phone,provider_id) VALUES ('Leo Gamalho','leogamalho@gmail.com','41899856263','4bdcb606-94d4-414c-86a2-3bc722c36580');
            INSERT INTO public.clerk ("name",email,phone,provider_id) VALUES ('Anderson Silva','andersonsilva@gmail.com','41899856263','4bdcb606-94d4-414c-86a2-3bc722c36580');`,
            undefined,
        );

        // Schedule - Max
        await queryRunner.query(
            `
            INSERT INTO public.schedule (day_of_week,hour_start,hour_end,active,provider_id,hour_lunch_start,hour_lunch_end) VALUES ('Segunda-Feira','08:00','20:00',true,'1de7c7d5-9394-46de-877e-0d8f241a4ca8','12:00','13:00');
            INSERT INTO public.schedule (day_of_week,hour_start,hour_end,active,provider_id,hour_lunch_start,hour_lunch_end) VALUES ('Terça-Feira','08:00','20:00',true,'1de7c7d5-9394-46de-877e-0d8f241a4ca8','12:00','13:00');
            INSERT INTO public.schedule (day_of_week,hour_start,hour_end,active,provider_id,hour_lunch_start,hour_lunch_end) VALUES ('Quarta-Feira','08:00','20:00',true,'1de7c7d5-9394-46de-877e-0d8f241a4ca8','12:00','13:00');
            INSERT INTO public.schedule (day_of_week,hour_start,hour_end,active,provider_id,hour_lunch_start,hour_lunch_end) VALUES ('Quinta-Feira','08:00','20:00',true,'1de7c7d5-9394-46de-877e-0d8f241a4ca8','12:00','13:00');
            INSERT INTO public.schedule (day_of_week,hour_start,hour_end,active,provider_id,hour_lunch_start,hour_lunch_end) VALUES ('Sexta-Feira','08:00','20:00',true,'1de7c7d5-9394-46de-877e-0d8f241a4ca8','12:00','13:00');
            INSERT INTO public.schedule (day_of_week,hour_start,hour_end,active,provider_id,hour_lunch_start,hour_lunch_end) VALUES ('Sabado','08:00','20:00',true,'1de7c7d5-9394-46de-877e-0d8f241a4ca8','12:00','13:00');`,
            undefined,
        );

        // Schedule - Roberto
        await queryRunner.query(
            `
            INSERT INTO public.schedule (day_of_week,hour_start,hour_end,active,provider_id,hour_lunch_start,hour_lunch_end) VALUES ('Segunda-Feira','08:00','20:00',true,'3b1c2b10-eab0-4095-9535-116543fd23c7','12:00','13:00');
            INSERT INTO public.schedule (day_of_week,hour_start,hour_end,active,provider_id,hour_lunch_start,hour_lunch_end) VALUES ('Terça-Feira','08:00','20:00',true,'3b1c2b10-eab0-4095-9535-116543fd23c7','12:00','13:00');
            INSERT INTO public.schedule (day_of_week,hour_start,hour_end,active,provider_id,hour_lunch_start,hour_lunch_end) VALUES ('Quarta-Feira','08:00','20:00',true,'3b1c2b10-eab0-4095-9535-116543fd23c7','12:00','13:00');
            INSERT INTO public.schedule (day_of_week,hour_start,hour_end,active,provider_id,hour_lunch_start,hour_lunch_end) VALUES ('Quinta-Feira','08:00','20:00',true,'3b1c2b10-eab0-4095-9535-116543fd23c7','12:00','13:00');
            INSERT INTO public.schedule (day_of_week,hour_start,hour_end,active,provider_id,hour_lunch_start,hour_lunch_end) VALUES ('Sexta-Feira','08:00','20:00',true,'3b1c2b10-eab0-4095-9535-116543fd23c7','12:00','13:00');
            INSERT INTO public.schedule (day_of_week,hour_start,hour_end,active,provider_id,hour_lunch_start,hour_lunch_end) VALUES ('Sabado','08:00','20:00',true,'3b1c2b10-eab0-4095-9535-116543fd23c7','12:00','13:00');`,
            undefined,
        );

        // Schedule - Joao
        await queryRunner.query(
            `
            INSERT INTO public.schedule (day_of_week,hour_start,hour_end,active,provider_id,hour_lunch_start,hour_lunch_end) VALUES ('Segunda-Feira','08:00','20:00',true,'3d60d508-f201-4e60-8a7e-674a933c2987','12:00','13:00');
            INSERT INTO public.schedule (day_of_week,hour_start,hour_end,active,provider_id,hour_lunch_start,hour_lunch_end) VALUES ('Terça-Feira','08:00','20:00',true,'3d60d508-f201-4e60-8a7e-674a933c2987','12:00','13:00');
            INSERT INTO public.schedule (day_of_week,hour_start,hour_end,active,provider_id,hour_lunch_start,hour_lunch_end) VALUES ('Quarta-Feira','08:00','20:00',true,'3d60d508-f201-4e60-8a7e-674a933c2987','12:00','13:00');
            INSERT INTO public.schedule (day_of_week,hour_start,hour_end,active,provider_id,hour_lunch_start,hour_lunch_end) VALUES ('Quinta-Feira','08:00','20:00',true,'3d60d508-f201-4e60-8a7e-674a933c2987','12:00','13:00');
            INSERT INTO public.schedule (day_of_week,hour_start,hour_end,active,provider_id,hour_lunch_start,hour_lunch_end) VALUES ('Sexta-Feira','08:00','20:00',true,'3d60d508-f201-4e60-8a7e-674a933c2987','12:00','13:00');
            INSERT INTO public.schedule (day_of_week,hour_start,hour_end,active,provider_id,hour_lunch_start,hour_lunch_end) VALUES ('Sabado','08:00','20:00',true,'3d60d508-f201-4e60-8a7e-674a933c2987','12:00','13:00');`,
            undefined,
        );

        // Schedule - Gian
        await queryRunner.query(
            `
            INSERT INTO public.schedule (day_of_week,hour_start,hour_end,active,provider_id,hour_lunch_start,hour_lunch_end) VALUES ('Segunda-Feira','08:00','20:00',true,'4bdcb606-94d4-414c-86a2-3bc722c36580','12:00','13:00');
            INSERT INTO public.schedule (day_of_week,hour_start,hour_end,active,provider_id,hour_lunch_start,hour_lunch_end) VALUES ('Terça-Feira','08:00','20:00',true,'4bdcb606-94d4-414c-86a2-3bc722c36580','12:00','13:00');
            INSERT INTO public.schedule (day_of_week,hour_start,hour_end,active,provider_id,hour_lunch_start,hour_lunch_end) VALUES ('Quarta-Feira','08:00','20:00',true,'4bdcb606-94d4-414c-86a2-3bc722c36580','12:00','13:00');
            INSERT INTO public.schedule (day_of_week,hour_start,hour_end,active,provider_id,hour_lunch_start,hour_lunch_end) VALUES ('Quinta-Feira','08:00','20:00',true,'4bdcb606-94d4-414c-86a2-3bc722c36580','12:00','13:00');
            INSERT INTO public.schedule (day_of_week,hour_start,hour_end,active,provider_id,hour_lunch_start,hour_lunch_end) VALUES ('Sexta-Feira','08:00','20:00',true,'4bdcb606-94d4-414c-86a2-3bc722c36580','12:00','13:00');
            INSERT INTO public.schedule (day_of_week,hour_start,hour_end,active,provider_id,hour_lunch_start,hour_lunch_end) VALUES ('Sabado','08:00','20:00',true,'4bdcb606-94d4-414c-86a2-3bc722c36580','12:00','13:00');`,
            undefined,
        );

        // Services - Max
        await queryRunner.query(
            `
            INSERT INTO public.services (title,description,value,provider_id,disccount,"time",category,"isPopularService") VALUES ('Piercing Orelha','Piercing Orelha',50,'1de7c7d5-9394-46de-877e-0d8f241a4ca8',0,'20','BodyPiercing',true);
            INSERT INTO public.services (title,description,value,provider_id,disccount,"time",category,"isPopularService") VALUES ('Piercing Sobrancelha','Piercing Sobrancelha',70,'1de7c7d5-9394-46de-877e-0d8f241a4ca8',0,'20','BodyPiercing',true);
            INSERT INTO public.services (title,description,value,provider_id,disccount,"time",category,"isPopularService") VALUES ('Tatuagem Pequena 20cm antebraço P&B','Tatuagem Pequena 20cm antebraço P&B',200,'1de7c7d5-9394-46de-877e-0d8f241a4ca8',0,'60','Tatuagem',true);
            INSERT INTO public.services (title,description,value,provider_id,disccount,"time",category,"isPopularService") VALUES ('Tatuagem Pequena 3cm dedo','Tatuagem pequena 3cm dedo',100,'1de7c7d5-9394-46de-877e-0d8f241a4ca8',0,'50','Tatuagem',false);`,
            undefined,
        );

        // Services - Roberto
        await queryRunner.query(
            `
            INSERT INTO public.services (title,description,value,provider_id,disccount,"time",category,"isPopularService") VALUES ('Corte de Cabelo c/ Desenho','Corte de Cabelo c/ desenho navalha',50,'3b1c2b10-eab0-4095-9535-116543fd23c7',0,'40','Barbearia',true);
            INSERT INTO public.services (title,description,value,provider_id,disccount,"time",category,"isPopularService") VALUES ('Risco na Sobrancelha (Navalha)','Risco na sobrancelha / lateral do cabelo',10,'3b1c2b10-eab0-4095-9535-116543fd23c7',0,'10','Barbearia',true);
            INSERT INTO public.services (title,description,value,provider_id,disccount,"time",category,"isPopularService") VALUES ('Barba','Barba',30,'3b1c2b10-eab0-4095-9535-116543fd23c7',0,'30','Barbearia',true);
            INSERT INTO public.services (title,description,value,provider_id,disccount,"time",category,"isPopularService") VALUES ('Cabelo&Barba','Corte de cabelo e barba',60,'3b1c2b10-eab0-4095-9535-116543fd23c7',9,'60','Barbearia',true);`,
            undefined,
        );

        // Services - Joao
        await queryRunner.query(
            `
            INSERT INTO public.services (title,description,value,provider_id,disccount,"time",category,"isPopularService") VALUES ('Tatuagem Pequena 20cm antebraço P&B','Tatuagem Pequena 20cm antebraço P&B',200,'3d60d508-f201-4e60-8a7e-674a933c2987',0,'60','Tatuagem',true);
            INSERT INTO public.services (title,description,value,provider_id,disccount,"time",category,"isPopularService") VALUES ('Tatuagem Pequena 20cm perna','Tatuagem pequena perna',250,'3d60d508-f201-4e60-8a7e-674a933c2987',0,'60','Tatuagem',true);`,
            undefined,
        );

        // Services - Gian
        await queryRunner.query(
            `
            INSERT INTO public.services (title,description,value,provider_id,disccount,"time",category,"isPopularService") VALUES ('Corte de Cabelo masculino simples','Corte de Cabelo simples',30,'4bdcb606-94d4-414c-86a2-3bc722c36580',0,'40','Barbearia',true);
            INSERT INTO public.services (title,description,value,provider_id,disccount,"time",category,"isPopularService") VALUES ('Desenho lateral da cabeça (Navalha)','Desenho lateral da cabeça',30,'4bdcb606-94d4-414c-86a2-3bc722c36580',0,'30','Barbearia',true);
            INSERT INTO public.services (title,description,value,provider_id,disccount,"time",category,"isPopularService") VALUES ('Barba','Barba',30,'4bdcb606-94d4-414c-86a2-3bc722c36580',0,'30','Barbearia',true);
            INSERT INTO public.services (title,description,value,provider_id,disccount,"time",category,"isPopularService") VALUES ('Cabelo&Barba','Corte de cabelo e barba',70,'4bdcb606-94d4-414c-86a2-3bc722c36580',10,'60','Barbearia',true);`,
            undefined,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        console.log(queryRunner);
    }
}
