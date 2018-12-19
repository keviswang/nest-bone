import { Injectable } from '@nestjs/common';
import { JwtService } from '@keviswang/jwt';
import { SystemUserService } from './SystemUser.service';
import { IJwtPayload } from '../interfaces/jwt-payload.interface';
import { SystemUser } from '../entities/SystemUser.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly systemUserService: SystemUserService,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(username: string, password: string): Promise<string> {
    // In the real-world app you shouldn't expose this method publicly
    // instead, return a token once you verify user credentials
    const user: IJwtPayload = { username: 'admin' };
    return this.jwtService.sign(user);
  }

  async validateUser(payload: IJwtPayload): Promise<SystemUser> {
    return await this.systemUserService.getSystemUser(payload.username);
  }
}