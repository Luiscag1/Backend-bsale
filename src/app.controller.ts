import { Controller, Get, Param, Query} from '@nestjs/common';
import { AppService } from './app.service';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
// @Get('/products')
// getProductLIst(@Query() params:any){
//   console.log('muestra otra cosa')
//   return this.appService.FindProductsList(params)

// }






}



























// @Get('/product/:id')
// getOneProductById(@Param() productId: any): any{
  
//   let id= productId.id
//   return this.appService.getOneProductById(id);
// }}
