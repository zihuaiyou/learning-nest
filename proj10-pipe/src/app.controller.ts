import { Body, Controller, DefaultValuePipe, Get, Param, ParseIntPipe, Post, UsePipes } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaClient } from '@prisma/client'; //nest 自带的管道
import { HandleIntPipe } from './handleInt/handleInt.pipe';
import { HandleBodyPipe } from './handle-body/handle-body.pipe';
import CreateArticleDto from './dto/create.article.dto';

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
  async add(@Body(HandleBodyPipe) dto: CreateArticleDto) {
   const article = await this.prisma.article.create({
      data: {
        content: dto.content,
        title: dto.title,
      }
    })
    console.log(article);
    return dto
  }
}
