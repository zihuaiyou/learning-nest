import {
  HttpException,
  HttpStatus,
  ValidationError,
  ValidationPipe,
} from '@nestjs/common';

export class Validate extends ValidationPipe {
  protected flattenValidationErrors(
    validationErrors: ValidationError[],
  ): string[] {
    const messages = {};
    validationErrors.forEach((error) => {
      messages[error.property] = Object.values(error.constraints)[0];
    });
    throw new HttpException({ code: 400, messages }, HttpStatus.BAD_REQUEST);
  }
}
