import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../_models';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  public createNewProduct(argProductIds:Product){
      return this.http.post(environment.product,argProductIds)
      .pipe(
        map(response=>{
          return response;
        })
      )
  }


  public enumerateProducts():Observable<Product[]>{
      return this.http.get<Product[]>(environment.product)
      .pipe(
        map(response=>{
          return response;
        })
      )
  }


  public getProductDetails(argProductId:string):Observable<Product>{
    return this.http.get<Product>(`${environment.product}/${argProductId}`)
    .pipe(
      map(response=>{
        return response;
      })
    )
  }

  public deleteProducts(argProductIds:string){
      return this.http.delete(`${environment.product}/${argProductIds}`)
      .pipe(
        map(response=>{
          return response;
        })
      )
  }
}
