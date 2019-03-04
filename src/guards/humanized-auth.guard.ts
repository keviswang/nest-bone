import { AuthGuard } from '@nestjs/passport';
import { ExecutionContext, Injectable } from '@nestjs/common';
import { UnauthorizedException } from '@exceptions/unauthorized.exception';

/**
 * @class HumanizedJwtAuthGuard
 * @classdesc 检验规则：Token 不存在 | Token 存在且有效
 * @example @UseGuards(HumanizedJwtAuthGuard)
 */
@Injectable()
export class HumanizedJwtAuthGuard extends AuthGuard('jwt') {
  canActivate(context: ExecutionContext) {
    return super.canActivate(context);
  }

  /**
   * @function handleRequest
   * @description 如果 Token 不存在或 Token 存在并有效，都是通行
   */
  handleRequest(error, authInfo, errInfo) {
    const okToken = !!authInfo;
    const noToken = !authInfo && errInfo && errInfo.message === 'No auth token';
    if (!error && (okToken || noToken)) {
      return authInfo;
    } else {
      throw error || new UnauthorizedException(errInfo && errInfo.message);
    }
  }
}
