import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

import { appFilters } from '@filters';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// 业务模块
import { AuthModule } from './apps/auth/auth.module';

const APP_MODULES = [AuthModule];

let ormOptions: TypeOrmModuleOptions;
if (process.env.DB_TYPE == 'mysql') {
  ormOptions = {
    type: 'mysql',
    host: process.env.DB_HOST || '127.0.0.1',
    port: parseInt(process.env.DB_PORT || '3306', 10),
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD,
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

@Module({
  imports: [TypeOrmModule.forRoot(ormOptions), ...APP_MODULES],
  controllers: [AppController],
  providers: [AppService, ...appFilters],
})
export class AppModule {}
