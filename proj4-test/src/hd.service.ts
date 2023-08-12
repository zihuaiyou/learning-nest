import { Injectable } from '@nestjs/common';

@Injectable()
export class HdService {
    get(): string {
        return 'Hello hd!';
      }
}
