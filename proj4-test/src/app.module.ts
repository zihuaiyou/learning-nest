import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HdService } from './hd.service';
import { config } from 'dotenv';
import { join } from 'path';

config({ path: join(__dirname, '../.env') })
console.log( process.env.NODE_ENV);

const configService = {
  provide: "configService",
  useClass: process.env.NODE_ENV === 'development' ? HdService : AppService
}
@Module({
  imports: [],
  controllers: [AppController],
  providers: [configService],
})
export class AppModule { }
