import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emailRegex = new RegExp('[a-zA-z0-9.-_]{6,}@gmail\.com')
  constructor(private userService:UserService,
    private router:Router) { }


  ngOnInit() {
  }

  handleLogin({username, password}: {username:string , password:string})
  {
    this.userService.login(username,password).subscribe(() =>
    {
      this.router.navigate([''])
    },console.error);

  }
}
