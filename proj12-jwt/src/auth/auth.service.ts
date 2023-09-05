import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import RegisterDto from './dto/register.dto';
import { user } from '@prisma/client';
import { JwtService } from '@nestjs/jwt';
import LoginDto from './dto/login.dto';
import { hash, verify } from 'argon2';

@Injectable()
export class AuthService {
    constructor(private readonly prisma: PrismaService, private readonly jwt: JwtService) { }
    async regisger(dto: RegisterDto) {
        const password = await hash(dto.password)
        const user = await this.prisma.user.create({
            data: {
                name: dto.name,
                password
            }
        })
        console.log(dto.password, password)
        return this.token(user)
    }
    async token({ name, id }: user) {
        return {
            token: await this.jwt.signAsync({
                name,
                sub: id
            })
        }
    }
    async login(dto: LoginDto) {
        const user = await this.prisma.user.findFirst({
            where: {
                name: dto.name
            }
        })

        const compareRes = await verify(user.password, dto.password)
        console.log(compareRes, user.password, dto.password);

        if (!compareRes) {
            throw new BadRequestException("密码错误")
        }
        return this.token(user)
    }
    async findAll(){
        const allUser = await this.prisma.user.findMany()
        return allUser
    }
}
