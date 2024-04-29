import { Module } from '@nestjs/common';

import { CartsController } from './carts.controller';

@Module({
  controllers: [CartsController],
})
export class CartsModule {}
