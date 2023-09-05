import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export default class AuthStrategyJwt extends PassportStrategy(Strategy, 'jwt',) {
    constructor( configService: ConfigService, private readonly prisma: PrismaService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: configService.get('TOKEN_SECRET')
        });

    }
    async validate({ sub: id }) {
        return this.prisma.user.findFirst({
            where:{id}
        })
    }
}