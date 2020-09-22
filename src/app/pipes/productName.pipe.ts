import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../_models';

@Pipe({name: 'productNamefilter'})
export class ProductNamePipe implements PipeTransform {
transform(productList: Product[], query: string): Product[] {
    if(!query){
        return productList;
    }
    return productList.filter(product=>{
        return product.name.toLocaleLowerCase().match(query.toLocaleLowerCase());
    })
  }
}