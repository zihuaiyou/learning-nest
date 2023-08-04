import { Inject, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { LoggerService } from '../../common/common.service';

@Injectable()
export class LoggerMiddleWare implements NestMiddleware {
    constructor(@Inject(LoggerService) private readonly loggerService: LoggerService){}
    use(req: Request, res: Response, next: NextFunction) {
        console.log("Request..." , this.loggerService.log())
        next()
    }
}