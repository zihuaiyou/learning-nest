import { Controller, Post, UploadedFile } from '@nestjs/common';
import { ImageUpload } from './decorator/upload.decator';

@Controller('upload')
export class UploadController {
  constructor() {}
  @Post('image')
  @ImageUpload()
  image(@UploadedFile() file: Express.Multer.File) {
    console.log(123);

    return file;
  }
}
