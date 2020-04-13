import { Component, OnInit, Input } from '@angular/core';
import IProduct from '../models/IProduct';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input('product')
  product:IProduct;
  constructor() { }

  ngOnInit() {
  }

  
}
