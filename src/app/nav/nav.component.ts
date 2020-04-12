import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private userService:UserService) { }

  ngOnInit() {
  }
  isReady():boolean
  {
    return this.userService.isAuthenticated();
  }
  logout()
  {
    this.userService.logout();
  }
  isAdmin()
  {
    if(
    this.userService.isAdmin()){
      return true
    }
  }
}
