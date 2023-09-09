import { Controller, Get, MethodNotAllowedException, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('upload')
export class UploadController {
  constructor() { }
  @Post('image')
  @UseInterceptors(FileInterceptor('file', {
    limits: { fileSize: Math.pow(1024, 2) },
    fileFilter(req: any, file: Express.Multer.File, callback: (error: Error | null, acceptFile: boolean) => void) {
      if (file.mimetype.includes('image')) {
        callback(null, true)
      } else {
        callback(new MethodNotAllowedException('文件类型不允许'), false)
      }
    }
  }
  )
  )
  upload(@UploadedFile() file: Express.Multer.File) {
    // console.log(file.mimetype);
    // image/jpeg
    return file
  }
}
