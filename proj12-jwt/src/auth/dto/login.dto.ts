import { IsNotEmpty } from "class-validator"
import { IsNotExistRule } from "src/rules/is-existed"

export default class LoginDto {
    @IsNotEmpty({message:"用户名不能为空"})
    @IsNotExistRule("user",{message:"该用户不存在"})
    name:string
    @IsNotEmpty({message:"密码不能为空"})
    password:string
}