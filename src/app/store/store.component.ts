import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { ProductComponent } from '../product/product.component';
import { ProductService } from '../services/product.service';
import IProduct from '../models/IProduct';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
categoryid:number;
  
  constructor() { }

  ngOnInit() {
    
    
   
  }

  receiveCategoryid($event)
  {
    
this.categoryid = $event;
console.log(this.categoryid);
  }

}
