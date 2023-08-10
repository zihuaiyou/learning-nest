import { Injectable } from '@nestjs/common';
import { ConfigServiceType } from './types/config.type';

@Injectable()
export class DbService {
    constructor(private readonly configService: ConfigServiceType) { }
    public connect() {
        return `<div>连接数据库成功 ${this.configService.url}</div>`
    }
}
