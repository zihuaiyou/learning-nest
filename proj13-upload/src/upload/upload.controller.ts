import { Controller, Post } from '@nestjs/common';

@Controller('upload')
export class UploadController {
    constructor(){}
    @Post('image')
    upload(){
        return 
    }
}
