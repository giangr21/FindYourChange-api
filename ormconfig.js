module.exports = {
	name: 'default',
	type: 'postgres',
	host: 'servidor.jclan.com.br',
	port: '5432',
	username: 'jclan',
	password: 'jcuser',
	database: 'fyc',
	// entities: [ 'src/modules/**/entities/*.ts' ],
	entities: [ 'dist/modules/**/entities/*.js' ],
	migrations: [ 'src/shared/infra/typeorm/migrations/*.ts' ],
	cli: {
		migrationsDir: 'src/shared/infra/typeorm/migrations'
	},
	logging: false,
	cache: false
};
