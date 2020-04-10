import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import IProduct from '../models/IProduct';

@Component({
  selector: 'app-recommend-products',
  templateUrl: './recommend-products.component.html',
  styleUrls: ['./recommend-products.component.css']
})
export class RecommendProductsComponent implements OnInit {

  promoProducts:IProduct[];
  constructor(private productService:ProductService) { }

  ngOnInit() {
this.productService.getPromoProducts().subscribe((data) => 
{
  console.log("pesho");
  this.promoProducts = data;
})

  }

}
