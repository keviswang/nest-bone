import * as TEXT from '@constants/text.constant';
import { HttpException, HttpStatus } from '@nestjs/common';

export class ForbiddenException extends HttpException {
  constructor(message?: any) {
    super(
      message || TEXT.HTTP_PARAMS_PERMISSION_ERROR_DEFAULT,
      HttpStatus.FORBIDDEN,
    );
  }
}
