import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { JsonWebTokenError } from 'jsonwebtoken';

@Catch(JsonWebTokenError)
export class JsonExceptionFilter implements ExceptionFilter {
  catch(exception: JsonWebTokenError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    Logger.error(
      JSON.stringify(exception),
      undefined,
      JsonExceptionFilter.name,
    );
    response.status(HttpStatus.BAD_REQUEST).json({
      message: exception.message,
    });
  }
}
