import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import AuthDto from './dto/auth.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }
    @Post('register')
    rigister(@Body() dto: AuthDto) {
        return this.authService.regisger(dto)
    }
}
