import { Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ArticleService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly config: ConfigService,
  ) {}
  async create(dto: CreateArticleDto) {
    const article = await this.prisma.article.create({
      data: {
        title: dto.title,
        content: dto.content,
      },
    });
    return article;
  }

  async findAll(page = 1) {
    const row = this.config.get('ARTICLE_PAGE_ROW');
    const total = await this.prisma.article.count();
    const articles = await this.prisma.article.findMany({
      skip: (page - 1) * row,
      take: +row,
    });

    return {
      meta: {
        current_page: page,
        page_row: row,
        total,
        data: articles,
      },
    };
  }

  async findOne(id: number) {
    const article = await this.prisma.article.findFirst({
      where: { id },
    });
    return article;
  }

  update(id: number, updateArticleDto: UpdateArticleDto) {
    return `This action updates a #${id} article`;
  }

  async remove(id: number) {
    const article = await this.prisma.article.delete({
      where: { id },
    });
    return article;
    // return `This action removes a #${id} article`;
  }
}
