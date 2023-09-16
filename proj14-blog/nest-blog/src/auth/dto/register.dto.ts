import { IsNotEmpty } from 'class-validator';
import { IsExistRule } from '../../common/rules/is-existed';

export default class RegisterDto {
  @IsNotEmpty({ message: '用户名不能为空' })
  @IsExistRule('user', { message: '用户已存在' })
  name: string;
  @IsNotEmpty({ message: '密码不能为空' })
  password: string;
}
