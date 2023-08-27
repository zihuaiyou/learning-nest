import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import RigisterDto from './dto/rigister.dto';
import LoginDto from './dto/login.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }
    @Post("register")
    register(@Body() dto:RigisterDto) {
       return this.authService.register(dto)
    }

    @Post("login")
    login(@Body() dto:LoginDto){
        return this.authService.login(dto)
    }
}
