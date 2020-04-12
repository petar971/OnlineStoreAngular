import { Component } from '@angular/core';
import { UserService } from './services/user.service';
//import { currentId } from 'async_hooks';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OnlineShop';
  
  constructor(private userService:UserService)
  {
    
  }
  
}
