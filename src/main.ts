import { NestFactory, FastifyAdapter } from '@nestjs/core';
import { config } from 'dotenv';
config();
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, new FastifyAdapter());
  app.enableCors();
  const port = parseInt(process.env.PORT || '4000', 10);
  await app.listen(port);
}

bootstrap().catch(err => console.error(err));
