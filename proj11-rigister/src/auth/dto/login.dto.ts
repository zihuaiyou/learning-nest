import {PartialType} from '@nestjs/mapped-types'
import RigisterDto from './rigister.dto';
import { IsNotExistRule } from 'src/rules/is-existed.rule';

export default class LoginDto extends PartialType(RigisterDto) {
    @IsNotExistRule("user",{message:"用户不存在"})
    name?: string;
}