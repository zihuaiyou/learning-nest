import { Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('upload')
export class UploadController {
  constructor() {}
  @Post('image')
  @UseInterceptors(FileInterceptor('file'))
    upload(@UploadedFile() file:Express.Multer.File){
        return file.originalname
    }
}
