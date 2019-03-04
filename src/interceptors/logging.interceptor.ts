import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  Logger,
} from '@nestjs/common';
import { isDevMode } from '@helpers/environment';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    call$: Observable<any>,
  ): Observable<any> {
    if (!isDevMode) {
      return call$;
    }
    const request = context.switchToHttp().getRequest();
    const content = request.method + ' -> ' + request.url;
    Logger.log('+ 收到请求：' + content);
    const now = Date.now();
    return call$.pipe(
      tap(() => Logger.log('- 响应请求：' + content + `${Date.now() - now}ms`)),
    );
  }
}
