import { IsNotEmpty } from 'class-validator';
import { IsExistRule } from '../../common/rules/is-existed';
import { IsConfirmedRule } from 'src/common/rules/is-confirmed';

export default class RegisterDto {
  @IsNotEmpty({ message: '用户名不能为空' })
  @IsExistRule('user', { message: '用户已存在' })
  name: string;
  @IsNotEmpty({ message: '密码不能为空' })
  @IsConfirmedRule('user', { message: '两次输入密码不相同' })
  password: string;
  @IsNotEmpty({ message: '确认密码不能为空' })
  password_confirmed: string;
}
