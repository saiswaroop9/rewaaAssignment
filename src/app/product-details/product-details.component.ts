import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'; 
import { ProductService } from '../_services';
import { Product } from '../_models';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  public productDetails:Product;
  constructor(private router:Router,
    private activatedRoute:ActivatedRoute,private _productService:ProductService) { }

  ngOnInit() {
    let id=this.activatedRoute.snapshot.params['id'];
    if(!id){
      this.router.navigate(['/'])
    }
    this.getProductDetails(id);
  }


  private getProductDetails(argId):void{
      this._productService.getProductDetails(argId)
      .subscribe(productDetailsResponse=>{
        this.productDetails=productDetailsResponse;
      })
  }

}
