import { HttpException, HttpStatus } from '@nestjs/common';

export class CustomException extends HttpException {
  constructor(message?: any, statusCode?: HttpStatus) {
    super(message, statusCode || HttpStatus.INTERNAL_SERVER_ERROR);
  }
}
