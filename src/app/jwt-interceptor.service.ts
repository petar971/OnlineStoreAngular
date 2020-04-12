import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from './services/user.service';

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptorService implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = this.userService.getToken();
    let jsonreq = req.clone(
      {
        setHeaders:
      {
        Authorization: `Bearer ${token}`
      }
      }
    );
    return next.handle(jsonreq);
  }

  constructor(private userService:UserService) { }
}
