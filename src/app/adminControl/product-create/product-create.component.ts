import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {


  categories:any[];
  constructor(private categoryService:CategoryService,
    private productService:ProductService,
    private router:Router,
    private userService:UserService) { }
  ngOnInit() {
    this.categoryService.getAllCategory().subscribe(data =>
    {
      this.categories = data;
    })
  }

  submitHandler({name,description,price,maker,image,category}:{name:string , description:string,price:number,maker:string,image:string,category:string})
  {
this.productService.Create(name,description,price,maker,image,category).subscribe(()=>
{
  this.router.navigate[''];
},console.error);
  }


}
