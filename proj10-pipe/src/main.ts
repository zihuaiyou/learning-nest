import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Validator } from './validator/validator';
import { ValidateExceptionFilter } from './validate-exception/validate-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new Validator())
  app.useGlobalFilters(new ValidateExceptionFilter())
  await app.listen(3000);
}
bootstrap();
