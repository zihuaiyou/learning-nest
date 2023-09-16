import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import RegisterDto from './dto/register.dto';
import LoginDto from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private auth: AuthService) {}
  @Post('register')
  register(@Body() dto: RegisterDto) {
    // return this.auth

    return dto;
  }
  @Post('login')
  login(@Body() dto: LoginDto) {
    // return this.auth
    return 456;
  }
}
