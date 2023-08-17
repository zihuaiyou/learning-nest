import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,private readonly config:ConfigService) {}

  @Get()
  getHello(): string {
    // return this.appService.getHello();
    // return this.config.get('AUTH_NAME');
    return this.config.get('upload.exts');
  }
}
