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
  create(createArticleDto: CreateArticleDto) {
    return 'This action adds a new article';
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
    // return articles;
  }

  findOne(id: number) {
    return `This action returns a #${id} article`;
  }

  update(id: number, updateArticleDto: UpdateArticleDto) {
    return `This action updates a #${id} article`;
  }

  remove(id: number) {
    return `This action removes a #${id} article`;
  }
}
