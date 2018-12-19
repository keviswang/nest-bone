import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'system_user' })
export class SystemUser {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', {
    nullable: false,
    length: 128,
    default: '',
    name: 'user',
  })
  user: string;

  @Column('varchar', {
    nullable: false,
    length: 256,
    default: '',
    name: 'pwd',
  })
  pwd: string;

  @Column('int', {
    nullable: true,
    name: 'role',
  })
  role: number | null;

  @Column('varchar', {
    nullable: true,
    length: 512,
    name: 'show_name',
  })
  show_name: string | null;

  @Column('varchar', {
    nullable: true,
    length: 128,
    name: 'email',
  })
  email: string | null;

  @Column('varchar', {
    nullable: true,
    length: 12,
    name: 'phone',
  })
  phone: string | null;

  @Column('datetime', {
    nullable: false,
    default: 'CURRENT_TIMESTAMP',
    name: 'create_time',
  })
  create_time: Date;

  @Column('varchar', {
    nullable: false,
    length: 128,
    default: '',
    name: 'create_ip',
  })
  create_ip: string;

  @Column('datetime', {
    nullable: true,
    name: 'last_login_time',
  })
  last_login_time: Date | null;

  @Column('varchar', {
    nullable: false,
    length: 512,
    default: '',
    name: 'appkey',
  })
  appkey: string;

  @Column('int', {
    nullable: false,
    default: '0',
    name: 'balance',
  })
  balance: number;

  @Column('varchar', {
    nullable: false,
    length: 128,
    default: '',
    name: 'zsname',
  })
  zsname: string;

  @Column('int', {
    nullable: false,
    default: '0',
    name: 'zspayType',
  })
  zspayType: number;

  @Column('varchar', {
    nullable: false,
    length: 512,
    default: '',
    name: 'zspayid',
  })
  zspayid: string;

  @Column('int', {
    nullable: false,
    default: '2',
    name: 'is_locked',
  })
  is_locked: number;

  @Column('int', {
    nullable: false,
    default: '1',
    name: 'user_parent',
  })
  user_parent: number;

  @Column('int', {
    nullable: false,
    default: '0',
    name: 'is_auto_sett',
  })
  is_auto_sett: number;

  @Column('varchar', {
    nullable: false,
    length: 128,
    default: '',
    name: 'card_bank_code',
  })
  card_bank_code: string;

  @Column('varchar', {
    nullable: false,
    length: 6,
    default: '0.0200',
    name: 'pay_fee',
  })
  pay_fee: string;

  @Column('varchar', {
    nullable: false,
    length: 6,
    default: '0.0100',
    name: 'settle_fee',
  })
  settle_fee: string;

  @Column('varchar', {
    nullable: false,
    length: 6,
    default: '0.0200',
    name: 'vip_pay_fee',
  })
  vip_pay_fee: string;

  @Column('varchar', {
    nullable: false,
    length: 6,
    default: '0.000',
    name: 'vip_settle_fee',
  })
  vip_settle_fee: string;

  @Column('int', {
    nullable: false,
    default: '1',
    name: 'pay_alipay',
  })
  pay_alipay: number;

  @Column('int', {
    nullable: false,
    default: '1',
    name: 'pay_qqpay',
  })
  pay_qqpay: number;

  @Column('int', {
    nullable: false,
    default: '0',
    name: 'pay_wxpay',
  })
  pay_wxpay: number;
}
