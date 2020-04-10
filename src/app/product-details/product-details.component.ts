import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import IProduct from '../models/IProduct';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  
 product:IProduct;
  id:string;
  constructor(private route:ActivatedRoute,
    private productService:ProductService) { }

  ngOnInit() {
// this.id = this.route.snapshot.params['id'];
// this.productService.getProductById(this.id).subscribe((data) =>
// {
//   this.product = data;
// })

  
  }
}
