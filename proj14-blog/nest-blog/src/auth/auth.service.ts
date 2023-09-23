import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import RegisterDto from './dto/register.dto';
import { hash } from 'argon2';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
  ) {}
  async register(dto: RegisterDto) {
    const user = await this.prisma.user.create({
      data: {
        name: dto.name,
        password: await hash(dto.password),
      },
    });
    return this.token(user);
  }
  private async token({ id, name }) {
    return { token: await this.jwt.signAsync({ sub: id, name }) };
  }
}
