import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../_models';

@Pipe({name: 'productCategoryfilter'})
export class ProductCategoryPipe implements PipeTransform {
transform(productList: Product[], query: string): Product[] {
    console.log(productList);
    if(!query){
        return productList;
    }
    return productList.filter(product=>{
        return product.category===query;
    })
  }
}