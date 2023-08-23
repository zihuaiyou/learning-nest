import { ArgumentsHost, BadRequestException, Catch, ExceptionFilter, HttpStatus } from '@nestjs/common';

@Catch()
export class ValidateExceptionFilter<T> implements ExceptionFilter {
  catch(exception: T, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse()

    if (exception instanceof BadRequestException) {
      const responseObj = exception.getResponse() as any
      // console.log(responseObj);

      return response.status(HttpStatus.BAD_REQUEST).json(
        {
          code: HttpStatus.BAD_REQUEST,
          message: responseObj.message.map(error => {
            const [field, msg] = error.split('-')
            return { field, msg }
          })
        }
      )
    }

  }
}
