import { Inject, Injectable } from '@nestjs/common';
import { TestService } from 'src/test/test.service';

@Injectable()
export class HdService {
    constructor(@Inject('otherService') private readonly otherService: string, private readonly testService: TestService) { }
    get() {
        return "我是hd" + this.testService.show() + this.otherService
    }
}
