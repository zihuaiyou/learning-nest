import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService, ConfigType } from '@nestjs/config';
import databaseConfig from './config/database.config';


@Controller()
export class AppController {

  constructor(
    private readonly appService: AppService,
    private readonly config: ConfigService,
    @Inject(databaseConfig.KEY) 
    // private readonly database: any,
    private readonly database: ConfigType<typeof databaseConfig>,
  ) { }

  @Get()
  getHello(): string {
    // return this.appService.getHello();
    // return this.config.get('AUTH_NAME');
    // return this.config.get('upload.exts');

    // // 自行实现类型提示
    // type getType<T extends () => {}> = T extends () => infer U ? U : T //拿到返回值的类型
    // type databaseConfigType = getType<typeof databaseConfig>
    // return (this.database as databaseConfigType).port

    // 使用ConfigType
    return this.database.port
  }
}
