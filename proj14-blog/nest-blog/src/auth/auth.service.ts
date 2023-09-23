import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import RegisterDto from './dto/register.dto';
import { hash, verify } from 'argon2';
import { JwtService } from '@nestjs/jwt';
import LoginDto from './dto/login.dto';

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

  async login(dto: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: { name: dto.name },
    });
    const verfyRes = await verify(user.password, dto.password);
    if (!verfyRes) {
      throw new BadRequestException('密码输入错误');
    }
    return this.token(user);
  }
  private async token({ id, name }) {
    return { token: await this.jwt.signAsync({ sub: id, name }) };
  }
}
