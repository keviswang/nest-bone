import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SystemUserRepository } from '../repositories/SystemUser.repository';
import { SystemUser } from '../entities/SystemUser.entity';

@Injectable()
export class SystemUserService {
  constructor(
    @InjectRepository(SystemUserRepository)
    private readonly userRepository: SystemUserRepository,
  ) {}

  async getSystemUser(merchant_no: string): Promise<SystemUser | undefined> {
    return this.userRepository.findOne({ where: { user: merchant_no } });
  }
}
