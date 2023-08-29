import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import AuthDto from './dto/auth.dto';
import { hash } from 'bcryptjs';

@Injectable()
export class AuthService {
    constructor(private readonly prisma: PrismaService) { }
    async regisger(dto: AuthDto) {
        const password = await hash(dto.password, 8)
        const user = await this.prisma.user.create({
            data: {
                name: dto.name,
                password
            }
        })
        console.log(user);
        return user
    }
}
