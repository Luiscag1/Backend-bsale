import { Injectable } from '@nestjs/common';
let db = [{id:1, product:'Zapato', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Museo_del_Bicentenario_-_Zapatos_de_N%C3%A9stor_Kirchner.jpg/1200px-Museo_del_Bicentenario_-_Zapatos_de_N%C3%A9stor_Kirchner.jpg'}, {id:2, product:'Ropa', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Museo_del_Bicentenario_-_Zapatos_de_N%C3%A9stor_Kirchner.jpg/1200px-Museo_del_Bicentenario_-_Zapatos_de_N%C3%A9stor_Kirchner.jpg'}, {id:3, product:'Lentes', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Museo_del_Bicentenario_-_Zapatos_de_N%C3%A9stor_Kirchner.jpg/1200px-Museo_del_Bicentenario_-_Zapatos_de_N%C3%A9stor_Kirchner.jpg'}, {id:4, product:'Rueda', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Museo_del_Bicentenario_-_Zapatos_de_N%C3%A9stor_Kirchner.jpg/1200px-Museo_del_Bicentenario_-_Zapatos_de_N%C3%A9stor_Kirchner.jpg'}, {id:5, product:'Collar', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Museo_del_Bicentenario_-_Zapatos_de_N%C3%A9stor_Kirchner.jpg/1200px-Museo_del_Bicentenario_-_Zapatos_de_N%C3%A9stor_Kirchner.jpg'}, {id:6, product:'Play', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Museo_del_Bicentenario_-_Zapatos_de_N%C3%A9stor_Kirchner.jpg/1200px-Museo_del_Bicentenario_-_Zapatos_de_N%C3%A9stor_Kirchner.jpg'}, {id:7, product:'Televisor', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Museo_del_Bicentenario_-_Zapatos_de_N%C3%A9stor_Kirchner.jpg/1200px-Museo_del_Bicentenario_-_Zapatos_de_N%C3%A9stor_Kirchner.jpg'}, {id:8, product:'Platos', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Museo_del_Bicentenario_-_Zapatos_de_N%C3%A9stor_Kirchner.jpg/1200px-Museo_del_Bicentenario_-_Zapatos_de_N%C3%A9stor_Kirchner.jpg'}, {id:9, product:'Medias', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Museo_del_Bicentenario_-_Zapatos_de_N%C3%A9stor_Kirchner.jpg/1200px-Museo_del_Bicentenario_-_Zapatos_de_N%C3%A9stor_Kirchner.jpg'}]
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getAllProducts(): any{
    return db
  }
  getOneProductById(id: any): any{
    return db.filter(item =>item.id == id)
  }
getSearchByName(name: any): any{
  return db.filter(item =>(item.product).toLowerCase() == name)
}
getProductByFilter(params ?: any){
  return db.filter(item=> (item.product).toLowerCase()== params.producto)
}
FindProductsList(params ?:any){
if(params.producto) return db.filter(item=> (item.product).toLowerCase()== params.producto)
return db
}

}

