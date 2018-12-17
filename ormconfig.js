import 'dotenv/config';
const NODE_ENV = process.env.NODE_ENV || 'development';

if (NODE_ENV == 'development') {
    module.exports = {
        type: 'mysql',
        host: "127.0.0.1",
        port: 3306,
        username: '',
        password: "",
        database: "",
        migrations: ["migration/*.js"],
        entities: [__dirname + '/src/**/*.entity{.ts,.js}'],
        cli: {
            entitiesDir: "src/entities",
            migrationsDir: "migrations"
        }
    }
} else if (NODE_ENV == 'production') {
    module.exports = {
        type: 'mysql',
        host: "",
        port: 3306,
        username: '',
        password: "",
        database: "payment",
        migrations: ["migration/*.js"],
        entities: [__dirname + '/src/**/*.entity{.ts,.js}'],
        cli: {
            entitiesDir: "src/entities",
            migrationsDir: "migrations"
        }
    }
}