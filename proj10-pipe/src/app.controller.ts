import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaClient } from '@prisma/client'; //nest 自带的管道
import { HandleIntPipe } from './handleInt/handleInt.pipe';

@Controller()
export class AppController {
  prisma:PrismaClient
  constructor(private readonly appService: AppService) {
    this.prisma = new PrismaClient()
  }

  @Get(':id')
  getHello(@Param('id',HandleIntPipe) id:number) {
    // return this.appService.getHello();
    console.log(typeof id);
    
    return this.prisma.article.findUnique({
      where:{
        id:id,
      }
    })
  }
}
