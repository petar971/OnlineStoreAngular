import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const BASE_URL = " http://127.0.0.1:8000/category";
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  selectedCategory:any
  constructor(private http:HttpClient) { }

  getAllCategory(): Observable<Array<any>>
  {
     return this.http.get<Array<any>>(BASE_URL);
  }

  selectCategory(category) {
    (this as any).selectedCategory = category;
  }
}
