import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  token:string;
  currentUser:
  {
    username:string;
    password:string;
  };
 
get isLogged()
{
  return !!this.currentUser;
}
  
  constructor(private http:HttpClient) { 
   
  }


  login(username:string,password:string)
  {
    return this.http.post('http://localhost:8000/api/login_check',{username,password},{withCredentials:true});
  }

  register(FirstName:string , LastName:string,email:string,password:string)
  {
    return this.http.post('http://127.0.0.1:8000/register',{FirstName,LastName,email,password},{withCredentials:true});
  }
  logout()
  {
   localStorage.clear();
  }
isAuthenticated()
{
  return localStorage.getItem('token') !== null;
}
isAdmin()
{
 if(this.isAuthenticated()){
  let roles = localStorage.getItem('roles');
 
console.log();
if(roles.indexOf("ROLE_ADMIN") !== -1)
{
 return true
}
else {
  return false
}
 }
}
getToken()
{
  localStorage.getItem('token');
  return this.token;
}
}
