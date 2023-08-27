import { BadRequestException, Injectable, Post } from '@nestjs/common';
import RigisterDto from './dto/rigister.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import bcrypt from "bcryptjs";
import LoginDto from './dto/login.dto';

@Injectable()
export class AuthService {
    constructor(private readonly prisma: PrismaService) { }
    async register(dto: RigisterDto) {
        const password = await bcrypt.hash(dto.password, 8)
        const user = await this.prisma.user.create({
            data: {
                name: dto.name,
                password
            }
        })
        delete user.password
        return user
    }

    async login(dto: LoginDto) {
        const password = await bcrypt.hash(dto.password, 8)
        const user = await this.prisma.user.findFirst({
            where: {
                name: dto.name
            }
        })
        const comPareRes = await bcrypt.compare(user.password, password)
        
        if (!comPareRes) {
            throw new BadRequestException("密码错误")
        }
        return user

    }
}
