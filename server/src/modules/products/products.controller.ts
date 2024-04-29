import {Controller, Get, Param} from '@nestjs/common';

import products, {Product} from "@app/products";

@Controller('products')
export class ProductsController {
    constructor() {
    }

    @Get()
    async GetAll(): Promise<Product[]> {
        return products;
    }

    @Get(':id')
    async GetOneById(@Param('id') id: string): Promise<Product> {
        return products.find(product => product.id === +id);
    }
}
