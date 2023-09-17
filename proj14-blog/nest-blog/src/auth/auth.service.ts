import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import RegisterDto from './dto/register.dto';
import { hash } from 'argon2';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  async register(dto: RegisterDto) {
    return await this.prisma.user.create({
      data: {
        name: dto.name,
        password: await hash(dto.password),
      },
    });
  }
}
