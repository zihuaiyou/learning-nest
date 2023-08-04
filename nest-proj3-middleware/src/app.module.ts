import { MiddlewareConsumer, Module, NestModule ,RequestMethod} from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { LoggerMiddleWare } from './common/middleware/logger.middleware';
import { CatsController } from './cats/cats.controller';
import {LoggerService} from './common/common.service';

@Module({
  imports: [CatsModule],
  providers:[LoggerService]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
    .apply(LoggerMiddleWare)
    // .forRoutes(CatsController)
    .forRoutes({ path: 'cats', method: RequestMethod.GET })
  }
}
