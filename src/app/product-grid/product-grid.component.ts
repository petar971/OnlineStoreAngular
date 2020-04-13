import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductService } from '../services/product.service';
import IProduct from '../models/IProduct';
import { CategoryService } from '../services/category.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.css']
})
export class ProductGridComponent implements OnInit {
  @Input() selectedCategory;
 
  products:IProduct[];
 
 
  constructor(private productService:ProductService
    ,private categoryService:CategoryService

    ) { 
     
    }

  ngOnInit() {
   
  
    this.productService.getAllProducts().subscribe((data) =>
    {
this.products = data;
    })
   
  }

  ngOnChanges()
  {
    this.getProductsByCategory(this.selectedCategory);
  }
getProductsByCategory(selectedCategory)
{
  this.productService.getProductsByCategoryId(selectedCategory).subscribe(
    (data) => {
      this.products = data;
    }
  )
}
  

}
