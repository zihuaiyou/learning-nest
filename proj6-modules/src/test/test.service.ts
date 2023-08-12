import { Injectable } from '@nestjs/common';

@Injectable()
export class TestService {
    show(){
        return '我是test'
    }
}
