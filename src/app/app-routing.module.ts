import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecommendProductsComponent } from './home/recommend-products/recommend-products.component';
import { SliderComponent } from './home/slider/slider.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = 
[
{
  path:"",
  pathMatch:"full",
  component:HomeComponent
},
{
  path:"home",
  redirectTo:""
},
{
  path:"healthyshop",
  component:ProductsListComponent
},
{
  path:"store",
  component:ProductsListComponent
},
{
  path:"login",
  component:LoginComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
