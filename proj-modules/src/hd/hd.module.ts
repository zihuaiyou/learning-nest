import { Module } from '@nestjs/common';
import { HdService } from './hd.service';
import { HdController } from './hd.controller';
import { TestModule } from 'src/test/test.module';

@Module({
  providers: [HdService],
  controllers: [HdController],
  imports:[TestModule]
})
export class HdModule {}
