import {
  MethodNotAllowedException,
  UseInterceptors,
  applyDecorators,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';

export function Upload(fileType = 'file', options: MulterOptions) {
  return applyDecorators(UseInterceptors(FileInterceptor(fileType, options)));
}

// @UseInterceptors(FileInterceptor('file', {
//     limits: { fileSize: Math.pow(1024, 2) },
//     fileFilter(req: any, file: Express.Multer.File, callback: (error: Error | null, acceptFile: boolean) => void) {
//       if (file.mimetype.includes('image')) {
//         callback(null, true)
//       } else {
//         callback(new MethodNotAllowedException('文件类型不允许'), false)
//       }
//     }
//   }
//   )
//   )

export function fileFilter(type: string[]) {
  return (
    req: any,
    file: Express.Multer.File,
    callback: (error: Error | null, acceptFile: boolean) => void,
  ) => {
    const check = type.some((f) => file.mimetype.includes(f));
    if (check) {
      callback(null, true);
    } else {
      callback(new MethodNotAllowedException('文件类型不允许'), false);
    }
  };
}

export function ImageUpload(fileType: string = 'file') {
  return Upload(fileType, {
    limits: { fileSize: Math.pow(1024, 2) * 10 },
    fileFilter: fileFilter(['image']),
  });
}

export function PdfUpload(fileType: string = 'file') {
  return Upload(fileType, {
    limits: { fileSize: Math.pow(1024, 2) * 10 },
    fileFilter: fileFilter(['pdf']),
  });
}
