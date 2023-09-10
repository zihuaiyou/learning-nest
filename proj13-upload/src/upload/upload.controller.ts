import { Controller, Post, UploadedFile } from '@nestjs/common';
import { Upload, fileFilter } from 'src/decorator/upload.decorator';

@Controller('upload')
export class UploadController {
  constructor() {}
  @Post('image')
  // @UseInterceptors(FileInterceptor('file', {
  //   limits: { fileSize: Math.pow(1024, 2) },
  //   fileFilter(req: any, file: Express.Multer.File, callback: (error: Error | null, acceptFile: boolean) => void) {
  //     if (file.mimetype.includes('image')) {
  //       callback(null, true)
  //     } else {
  //       callback(new MethodNotAllowedException('文件类型不允许'), false)
  //     }
  //   }
  // }
  // )
  // )
  // 自定义装饰器
  @Upload('file', {
    limits: { fileSize: Math.pow(1024, 2) },
    fileFilter: fileFilter('image'),
  })
  upload(@UploadedFile() file: Express.Multer.File) {
    // console.log(file.mimetype);
    // image/jpeg
    return file;
  }
}
