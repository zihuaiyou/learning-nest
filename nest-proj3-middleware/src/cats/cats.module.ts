import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatService } from './cats.service'

@Module({
    imports: [],
    controllers: [CatsController],
    providers: [CatService],
    exports: [CatService]
})
export class CatsModule { }
