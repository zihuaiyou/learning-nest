import { Controller, Get } from '@nestjs/common';
import { HdService } from './hd.service';

@Controller('hd')
export class HdController {
    constructor( private readonly hdService:HdService){}
    @Get()
    get(){
        return this.hdService.get()
    }
}
