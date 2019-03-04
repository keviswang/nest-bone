import 'dotenv/config';

if (process.env.DB_TYPE == 'mysql') {
    module.exports = {
        type: 'mysql',
        host: process.env.DB_HOST || '127.0.0.1',
        port: parseInt(process.env.DB_PORT || '3306', 10),
        username: process.env.DB_USERNAME || 'root',
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        migrations: ["migrations/*.{ts,js}"],
        entities: [__dirname + '/src/**/*.entity{.ts,.js}'],
        cli: {
            entitiesDir: "src/entities",
            migrationsDir: "migrations"
        }
    }
} else if (process.env.DB_TYPE == 'postgres') {
    module.exports = {
        type: 'postgres',
        host: process.env.DB_HOST || '127.0.0.1',
        port: parseInt(process.env.DB_PORT || '5432', 10),
        username: process.env.DB_USERNAME || 'postgres',
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        entities: [
            __dirname + '/**/*.entity{.ts,.js}',
            __dirname + '/entities/*{.ts,*.js}',
        ],
        synchronize: process.env.NODE_ENV == 'production' ? false : true,
    };
}