import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
categories:any[]
categoryid:number;
 @Output() selectedCategory = new EventEmitter<number>();
 
  constructor(private CategoryService:CategoryService,private productService:ProductService) { }

  ngOnInit() {
    this.CategoryService.getAllCategory().subscribe(
    (data) =>
    {
      this.categories = data;
    }
    )

   
  }
  sendCategoryId(category)
    {
      this.categoryid = category.id;
      this.selectedCategory.emit(this.categoryid);
    } 
}
