import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import IProduct from 'src/app/models/IProduct';

@Component({
  selector: 'app-listproduct',
  templateUrl: './listproduct.component.html',
  styleUrls: ['./listproduct.component.css']
})
export class ListproductComponent implements OnInit {

  products:IProduct[];
  constructor(private productService:ProductService) { }

  ngOnInit() {
  this.productService.getAllProducts().subscribe((data)=>
  {
    this.products = data;
  })
  }


}
