import {
  Controller,
  Get,
  Post,
  Body,
  Param,
} from '@nestjs/common';
import {
  CreateCatDto,
} from './dto/create-cat.dto';
import Cat from './interface/cat.interface';
import { CatService } from './cats.service';

@Controller('cats')
export class CatsController {
  // 构造函数注入
  constructor(private catService: CatService) { }

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
   this.catService.create(createCatDto)
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} cat`;
  }
}
