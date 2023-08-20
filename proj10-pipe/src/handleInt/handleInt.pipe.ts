import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class HandleIntPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    // throw new BadRequestException('参数错误')
    // console.log(metadata);
    return metadata.metatype === Number ? +value : value
  }
}
