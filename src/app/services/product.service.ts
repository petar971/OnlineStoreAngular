import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import IProduct from '../models/IProduct';
const BASE_URL = " http://127.0.0.1:8000/products";
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
}

