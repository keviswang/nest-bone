import { NestFactory, FastifyAdapter } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, new FastifyAdapter());

  app.enableCors();
  await app.listen(process.env.PORT || 4000);
}

bootstrap().catch(err => console.error(err));
