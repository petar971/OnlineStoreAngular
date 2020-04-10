import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService:UserService,
    private router:Router) { }

  ngOnInit() {
  }
submitHandler({firstName, lastName, email, password}:{firstName:string, lastName:string, email:string, password:string})
{
this.userService.register(firstName,lastName,email,password).subscribe(() =>
{
  this.router.navigate[''];
},console.error);
}
}
