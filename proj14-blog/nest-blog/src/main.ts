import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Validate } from './common/validate';
import { TransformInterceptor } from './common/interceptors/transform-interceptor';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets('uploads', { prefix: '/uploads' });
  app.useGlobalPipes(new Validate());
  app.useGlobalInterceptors(new TransformInterceptor());
  app.setGlobalPrefix('api');

  await app.listen(3000);
}
bootstrap();
