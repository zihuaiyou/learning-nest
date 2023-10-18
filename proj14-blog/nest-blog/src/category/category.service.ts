import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CategoryService {
  constructor(private readonly prisma: PrismaService) { }
  async create(createCategoryDto: CreateCategoryDto) {
    const category = await this.prisma.category.create({
      data: {
        title: createCategoryDto.title
      }
    })
    return category
  }

  async findAll() {
    const category = await this.prisma.category.findMany()
    return category
  }

  async findOne(id: number) {
    const category = await this.prisma.category.findFirst(
      {
        where: { id }
      }
    )
    return category
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    const category = await this.prisma.category.update(
      {
        where: { id },
        data: {
          title: updateCategoryDto.title
        }
      }
    )
    return category
  }

 async remove(id: number) {
    const category = await this.prisma.category.delete({
      where: { id },
    });
    return category;
  }
}
