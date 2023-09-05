import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import RegisterDto from './dto/register.dto';
import LoginDto from './dto/login.dto';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

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
    @Get('all')
    @UseGuards(AuthGuard('jwt'))
    all(@Req() req:Request) {
        return req.user
        // return this.authService.findAll()
    }
}
