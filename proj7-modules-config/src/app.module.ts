import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
import path from 'path';

const pathConfig = path.resolve(__dirname, './configure')
@Module({
  imports: [ConfigModule.register({ path: pathConfig })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
