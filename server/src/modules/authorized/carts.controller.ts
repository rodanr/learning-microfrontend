import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';

@Controller('carts')
export class CartsController {
  constructor() {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async index(@Request() req): Promise<{ userId: number }> {
    return { userId: req.user.userId };
  }
}
