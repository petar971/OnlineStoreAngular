import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import IProduct from '../models/IProduct';
const BASE_URL = " http://127.0.0.1:8000/products";
const token = localStorage.getItem('token');
const headers = new HttpHeaders(
  { 'Authorization': `Bearer ${token}`

 
  })

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getAllProducts(): Observable<Array<IProduct>>
{
   return this.http.get<Array<IProduct>>(BASE_URL);
}
getPromoProducts(): Observable<Array<IProduct>>
{
  return this.http.get<Array<IProduct>>(BASE_URL + "/promo");
}

getProductById(id:number): Observable<Array<IProduct>>
{
   return this.http.get<Array<IProduct>>(BASE_URL + `/${id}`);
}
getProductsByCategoryId(id:number): Observable<Array<IProduct>>
{
   return this.http.get<Array<IProduct>>(BASE_URL + `/category/${id}`);
}

Create(name:string , description:string,price:number,maker:string,image:string,category:string)
  {
    return this.http.post('http://127.0.0.1:8000/api/products/create',{name,description,price,maker,image,category},{headers});
  }

}

