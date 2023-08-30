import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import AuthDto from './dto/auth.dto';
import { hash } from 'bcryptjs';
import { user } from '@prisma/client';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private readonly prisma: PrismaService,private readonly jwt:JwtService) { }
    async regisger(dto: AuthDto) {
        const password = await hash(dto.password, 8)
        const user = await this.prisma.user.create({
            data: {
                name: dto.name,
                password
            }
        })
        return this.token(user)
    }
    async token({name,id}:user){
        return {
            token:await this.jwt.signAsync({
                name,
                sub:id
            })
        }
    }
}
