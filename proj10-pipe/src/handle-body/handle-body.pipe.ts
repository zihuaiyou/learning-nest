import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import {plainToInstance} from 'class-transformer';
import { validate } from 'class-validator';

@Injectable()
export class HandleBodyPipe implements PipeTransform {
  async transform(value: any, metadata: ArgumentMetadata) {
    // console.log(value);
    // console.log(metadata);
    // if (!value.title) {
    //   throw new BadRequestException("标题不能为空")
    // }
    // if (!value.content) {
    //   throw new BadRequestException("内容不能为空")
    // }
    const obj = plainToInstance(metadata.metatype,value)
    const error = await validate(obj) 
    // console.log(error);
    if(error.length){
      throw new BadRequestException("表单验证错误")
    }
       
    return value;
  }
}
