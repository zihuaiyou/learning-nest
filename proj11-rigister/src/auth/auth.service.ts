import { Body, Injectable } from '@nestjs/common';
import RigisterDto from './dto/rigister.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
    constructor(private readonly prisma: PrismaService) { }
    async register(dto: RigisterDto) {
        const user = await this.prisma.user.findUnique({
            where: {
                id: 1
            }
        })
        return user
    }
}
