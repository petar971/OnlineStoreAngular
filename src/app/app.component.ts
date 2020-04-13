import { Component } from '@angular/core';
import { UserService } from './services/user.service';
//import { currentId } from 'async_hooks';
import { CookieService } from 'ngx-cookie-service';
import IProduct from './models/IProduct';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OnlineShop';
  cartProductList: IProduct[];
  constructor(private userService:UserService)
  {
    
  }
  
}
