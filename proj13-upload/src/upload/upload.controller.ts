import { Controller, Get, Post } from '@nestjs/common';

@Controller('upload')
export class UploadController {
    constructor(){}
    @Get('image')
    upload(){
        return 123
    }
}
