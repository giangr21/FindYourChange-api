# olog-api

## Conventional Commits

[conventionalcommits.org](https://www.conventionalcommits.org/pt-br/v1.0.0-beta.4/)

## TypeORM

[https://typeorm.io](https://typeorm.io)

### New Entity

yarn typeorm entity:create -n User -d src/user/entity

### New Migration

yarn typeorm migration:create -n UserMigration
npx typeorm migration:create -n AlterFKUserCentral

### Generate Schema

yarn typeorm migration:generate -n UserMigration

### Run Migrations

yarn typeorm migration:run
npm run typeorm migration:run

### Revert Migrations

yarn typeorm migration:revert

obs: Necessário criar script (yarn typeorm) no package.json

## Rotas para CEP

### Estados
http://localhost:3333/state
http://localhost:3333/state/PR

### Cidades
http://localhost:3333/city/4393
http://localhost:3333/city/getByState/PR

### Bairros
http://localhost:3333/area/49472
http://localhost:3333/area/getByCity/4393

### Ruas
http://localhost:3333/street/81770260
http://localhost:3333/street/find/PR/josé noga
