import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import RegisterDto from './dto/register.dto';
import LoginDto from './dto/login.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }
    @Post('register')
    rigister(@Body() dto: RegisterDto) {
        return this.authService.regisger(dto)
    }
    @Post('login')
    login(@Body() dto: LoginDto) {
        return this.authService.login(dto)
    }
}
