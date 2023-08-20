import { Body, Controller, DefaultValuePipe, Get, Param, ParseIntPipe, Post, UsePipes } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaClient } from '@prisma/client'; //nest 自带的管道
import { HandleIntPipe } from './handleInt/handleInt.pipe';
import { HandleBodyPipe } from './handle-body/handle-body.pipe';

@Controller()
export class AppController {
  prisma: PrismaClient
  constructor(private readonly appService: AppService) {
    this.prisma = new PrismaClient()
  }

  @Get()
  @UsePipes(HandleIntPipe)
  getHello(@Param('id', new DefaultValuePipe(1)) id: number) {  //默认值管道 
    // return this.appService.getHello();
    console.log(typeof id);
    return this.prisma.article.findUnique({
      where: {
        id: id,
      }
    })
  }

  @Post('store')
  add(@Body(HandleBodyPipe) dto: Record<string, any>) {
    return dto
  }
}
