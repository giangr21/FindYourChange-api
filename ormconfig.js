module.exports = {
	name: 'default',
	type: 'postgres',
	host: String(process.env.DB_HOST),
	port: process.env.DB_PORT,
	username: String(process.env.DB_USERNAME),
	password: String(process.env.DB_PASSWORD),
	database: String(process.env.DB_DATABASE),
	entities: [ 'src/modules/**/entities/*.ts' ],
	// entities: [ './modules/**/entities/*.js' ],
	migrations: [ 'src/shared/infra/typeorm/migrations/*.ts' ],
	cli: {
		migrationsDir: 'src/shared/infra/typeorm/migrations'
	},
	logging: false,
	cache: false
};
