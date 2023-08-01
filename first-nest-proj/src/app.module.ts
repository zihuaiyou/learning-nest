import { Module } from '@nestjs/common';
import { CatsController } from './cats/cats.controller';
import { CatService } from './cats/cats.service';

@Module({
  imports: [],
  controllers: [CatsController],
  providers: [CatService],
})
export class AppModule {}
