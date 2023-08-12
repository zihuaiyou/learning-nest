import { Module } from '@nestjs/common';
import { TestService } from './test.service';

@Module({
  providers: [TestService,{
    provide:'otherService',
    useValue:'123'
  }],
  exports:[TestService,"otherService"]
})
export class TestModule {}
