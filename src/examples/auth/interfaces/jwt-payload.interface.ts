export interface IJwtPayload {
  readonly id: number;
  readonly username: boolean;
  readonly iat: number;
  readonly exp: number;
}
