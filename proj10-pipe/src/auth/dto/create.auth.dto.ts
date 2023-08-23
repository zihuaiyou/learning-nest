import { IsNotEmpty, Length, Validate } from "class-validator";
import { IsConfirmed } from "src/rules/is-confirmed";

export default class CreateAuthDto {
    @IsNotEmpty({message:"用户名不能为空"})
    name:string;
    @IsNotEmpty({message:"密码不能为空"})
    @Validate(IsConfirmed,{message:"确认密码输入失败"})
    password:string;
}