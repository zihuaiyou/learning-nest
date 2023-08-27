import { Injectable } from '@nestjs/common';
import RigisterDto from './dto/rigister.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import bcrypt from "bcryptjs"; 

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
}
