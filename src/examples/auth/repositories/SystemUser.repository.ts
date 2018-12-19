import { Repository } from 'typeorm';
import { EntityRepository } from 'typeorm/decorator/EntityRepository';
import { SystemUser } from '../entities/SystemUser.entity';

@EntityRepository(SystemUser)
export class SystemUserRepository extends Repository<SystemUser> {}
