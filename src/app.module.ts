import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { appFilters } from '@keviswang/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './examples/auth/auth.module';

let ormOptions: TypeOrmModuleOptions;
if (process.env.DB_TYPE == 'mysql') {
  ormOptions = {
    type: 'mysql',
    host: process.env.DB_HOST || '127.0.0.1',
    port: parseInt(process.env.DB_PORT || '3306', 10),
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || 'root',
    database: process.env.DB_NAME,
    entities: [
      __dirname + '/**/*.entity{.ts,.js}',
      __dirname + '/entities/*{.ts,*.js}',
    ],
    synchronize: process.env.NODE_ENV == 'production' ? false : true,
  };
} else if (process.env.DB_TYPE == 'postgres') {
  ormOptions = {
    type: 'postgres',
    host: process.env.DB_HOST || '127.0.0.1',
    port: parseInt(process.env.DB_PORT || '3306', 10),
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || 'root',
    database: process.env.DB_NAME,
    entities: [
      __dirname + '/**/*.entity{.ts,.js}',
      __dirname + '/entities/*{.ts,*.js}',
    ],
    synchronize: process.env.NODE_ENV == 'production' ? false : true,
  };
}

@Module({
  imports: [TypeOrmModule.forRoot(ormOptions), AuthModule],
  controllers: [AppController],
  providers: [AppService, ...appFilters],
})
export class AppModule {}
