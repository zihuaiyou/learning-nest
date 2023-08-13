import { Controller, Get, Inject } from '@nestjs/common';
import { ConfigService } from './config/config.service';

@Controller()
export class AppController {
  constructor(private readonly config: ConfigService) {}

  @Get()
  get(): any {
    return this.config.getConfig("app.name")
  }
}
