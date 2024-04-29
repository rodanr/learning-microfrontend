import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

import { CartsModule } from './modules/authorized/carts.module';
import { UnauthorizedModule } from '@app/modules/products/products.module';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { UsersService } from './users/users.service';

@Module({
  controllers: [AppController],
  providers: [UsersService],
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    CartsModule,
    UnauthorizedModule,
    AuthModule,
  ],
})
export class AppModule {}
