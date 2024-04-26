import { Controller, Get} from '@nestjs/common';

import products, {Product} from "@app/products";

@Controller('products')
export class ProductsController {
  constructor() {}

  @Get()
  async index(): Promise<Product[]> {
    return products;
  }
}
