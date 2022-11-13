import { Controller, Get, Param, Query} from '@nestjs/common';
import {ProductService} from './product.service';
@Controller('products')
export class ProductController {
  constructor(private readonly appService: ProductService) {}

@Get()
getProductLIst(@Query() params:any){
  console.log('muestra otra cosa')
  //return 'hola'
  return this.appService.findAll(params)

}




}





// @Get('/product/:id')
// getOneProductById(@Param() productId: any): any{
  
//   let id= productId.id
//   return this.appService.getOneProductById(id);
// }}
