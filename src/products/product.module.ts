import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { productProviders } from './product.providers';
import { categoryProviders } from './category.providers';
import { ProductService } from './product.service';
import { ProductController } from './product.controler';
@Module({
  imports: [DatabaseModule],
  providers: [
    ...productProviders, ...categoryProviders,
    ProductService,
  ],
  controllers: [ProductController],
  exports: [ProductService]
})
export class ProductModule {}




