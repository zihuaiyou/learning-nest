import { UseGuards, applyDecorators } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { RoleGuard } from "../guard/role/role.guard";

export function Auth() {
    return applyDecorators(UseGuards(AuthGuard('jwt'), RoleGuard))
}