import { Body, Controller, Post } from '@nestjs/common';
import CreateAuthDto from 'src/auth/dto/create.auth.dto';

@Controller('auth')
export class AuthController {
    @Post("register")
    register(@Body() dto:CreateAuthDto){
        return dto
    }
}
