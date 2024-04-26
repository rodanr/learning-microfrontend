import { Controller, Get, Param } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  constructor() {}

  @Get()
  async index(): Promise<boolean> {
    return true;
  }
}
