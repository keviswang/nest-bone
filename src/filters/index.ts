import { APP_FILTER } from '@nestjs/core';
import { JsonExceptionFilter } from './custom-exception.filter';

export const appFilters = [
  { provide: APP_FILTER, useClass: JsonExceptionFilter },
];
