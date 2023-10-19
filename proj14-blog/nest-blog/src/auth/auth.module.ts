import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import AuthStrategyJwt from './strategy/auth.strategy';

@Module({
  imports: [
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: function (config: ConfigService) {
        return {
          secret: config.get('TOKEN_SECRET'),
          signOptions: { expiresIn: '100d' },
        };
      },
    }),
  ],
  providers: [AuthService,AuthStrategyJwt],
  controllers: [AuthController,],
})
export class AuthModule {}
