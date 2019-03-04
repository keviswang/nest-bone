import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Reflector } from '@nestjs/core';
import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  HttpStatus,
} from '@nestjs/common';
import { CustomException } from '@exceptions/custom.exception';
import * as META from '@constants/meta.constant';
import * as TEXT from '@constants/text.constant';

@Injectable()
export class ErrorInterceptor implements NestInterceptor {
  constructor(private readonly reflector: Reflector) {}
  intercept(
    context: ExecutionContext,
    call$: Observable<any>,
  ): Observable<any> {
    const target = context.getHandler();
    const statusCode = this.reflector.get<HttpStatus>(
      META.HTTP_ERROR_CODE,
      target,
    );
    const message =
      this.reflector.get<string>(META.HTTP_ERROR_MESSAGE, target) ||
      TEXT.HTTP_DEFAULT_ERROR_TEXT;
    return call$.pipe(
      catchError(error =>
        throwError(new CustomException({ message, error }, statusCode)),
      ),
    );
  }
}
