import { Component, OnInit } from '@angular/core';
import IProduct from '../models/IProduct';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  products:IProduct[];
  constructor(private sharedService:SharedService) { }

  ngOnInit() {

   this.products = this.sharedService.getCartList();
   
  }


    
    


}
  


