module.exports = {
    "type": "postgres",
    "host": "localhost",
    "port": 5432,
    "username": "postgres",
    "password": "root",
    "database": "loan",
    "migrations": ["migration/*.js"],
    "entities": [__dirname + '/src/**/*.entity{.ts,.js}'],
    "cli": {
        "entitiesDir": "src/entities",
        "migrationsDir": "migrations"
    }
 }