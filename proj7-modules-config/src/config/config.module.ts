import { DynamicModule, Module } from '@nestjs/common';
import { ConfigService } from './config.service';

@Module({
  providers: [ConfigService],
  exports:[ConfigService]
})
export class ConfigModule {
  static register(options:{path:string}):DynamicModule {
    return {
      module:ConfigModule,
      providers:[{provide:"CONFIG_OPTIONS",useValue:options}],
      exports:['CONFIG_OPTIONS']
    }
  }
}
