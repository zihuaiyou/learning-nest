import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { DbService } from './dbservice.service';

@Controller('hd')
export class AppController {
  constructor(private readonly appService: AppService,private readonly dbService: DbService,) { }

  // @Get()
  // getHello(): string {
  //   return this.appService.get();
  // }

  @Get()
  connect(): string {
    return this.dbService.connect();
  }
}
