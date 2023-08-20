import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class HandleBodyPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log(value);
    console.log(metadata);
    if (!value.title) {
      throw new BadRequestException("标题不能为空")
    }
    if (!value.content) {
      throw new BadRequestException("内容不能为空")
    }
    return value;
  }
}
