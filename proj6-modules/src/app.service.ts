import { Inject, Injectable } from '@nestjs/common';
import { ConfigServiceType } from './types/config.type';


@Injectable()
export class AppService {
  constructor ( @Inject("ConfigService") private readonly configService:ConfigServiceType ){}
  get(): string {
    return "helloworld" + this.configService.url
  }
}
