import { IsNotEmpty } from "class-validator"

export default class RigisterDto {
    @IsNotEmpty({message:"用户名不能为空"})
    name:string
    @IsNotEmpty({message:"密码不能为空"})
    password:string
}