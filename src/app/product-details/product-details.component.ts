import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import IProduct from '../models/IProduct';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  
 product:IProduct;
 productsCart:IProduct[];
  id:string;

  constructor(private route:ActivatedRoute,
    private productService:ProductService,
    private sharedService:SharedService
    ) { }

  ngOnInit() {
this.id = this.route.snapshot.params['id'];
this.productService.getProductById(this.id).subscribe((data) =>
{
  this.product = data;
})


}

addToCart(product) {
  this.sharedService.addToCart(product);
  window.alert('Your product has been added to the cart!');
  }




}
