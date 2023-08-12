import { Controller, Get, Inject } from '@nestjs/common';

@Controller('hd')
export class AppController {
  constructor(@Inject("configService") private hd) { }

  @Get()
  getHello(): string {
    return this.hd.get();
  }
}
