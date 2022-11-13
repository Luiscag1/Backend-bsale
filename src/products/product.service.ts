// import { Injectable, Inject } from '@nestjs/common';
// import { Repository } from 'typeorm';
// import { Photo } from './photo.entity';

// @Injectable()
// export class PhotoService {
//   constructor(
//     @Inject('PHOTO_REPOSITORY')
//     private photoRepository: Repository<Photo>,
//   ) {}

//   async findAll(): Promise<Photo[]> {
//     return this.photoRepository.find();
//   }
// }







import { Injectable, Inject } from '@nestjs/common';
import { Product } from './product.entity';
import { Like, Repository } from 'typeorm';
//import { Category } from './category.entity';

@Injectable()
export class ProductService {

  constructor(
         @Inject('PRODUCT_REPOSITORY')
         private productRepository: Repository<Product>,
       ) {}

       async findAll(params ?:any): Promise<Product[]> {
        //if(params.producto) return db.filter(item=> (item.product).toLowerCase()== params.producto)
        let search = params.producto;
        if(search){

        
             return this.productRepository.find({
                where: {
                    name: Like('%' + search + '%')
                    
                    
                },
            });
        }
        return this.productRepository.find()
           }
       
           
}

