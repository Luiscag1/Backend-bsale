import { Module, Global } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './products/product.module';

@Global()
@Module({
  imports: [ ProductModule ],
  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule {}
