import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUser:
  {
    email:string;
    password:string;
  } = null;
 
get isLogged()
{
  return !!this.currentUser;
}
  
  constructor(private http:HttpClient) { 
    this.http.get('http://localhost:8000/auth').subscribe((user:any)=>
    {
      this.currentUser = user;
    }, () => {
      this.currentUser = null;
    })
  }


  login(username:string,password:string)
  {
    return this.http.post('http://localhost:8000/api/login_check',{username,password},{withCredentials:true});
  }

  register(FirstName:string , LastName:string,email:string,password:string)
  {
    return this.http.post('https://127.0.0.1:8000/register',{FirstName,LastName,email,password},{withCredentials:true});
  }
  logout()
  {
    return this.http.post('http://localhost:8000/logout',{},{withCredentials:true});
  }
}
