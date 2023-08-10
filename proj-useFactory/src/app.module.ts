import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigService } from './config.service';
import { DbService } from './dbservice.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, ConfigService, {
    provide: DbService,
    inject:["ConfigService"],
    useFactory: (ConfigService) => {
      return new DbService(ConfigService)
    }
  }],
})
export class AppModule { }
