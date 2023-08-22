import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Validator } from './validator/validator';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new Validator())
  await app.listen(3000);
}
bootstrap();
