import { HttpException, HttpStatus } from '@nestjs/common';
import * as TEXT from "@constants/text.constant";

export class UnauthorizedException extends HttpException {
  constructor(message?: any) {
    super(
      message || TEXT.HTTP_UNAUTHORIZED_TEXT_DEFAULT,
      HttpStatus.UNAUTHORIZED,
    );
  }
}
