import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecommendProductsComponent } from './recommend-products/recommend-products.component';
import { SliderComponent } from './slider/slider.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { AppComponent } from './app.component';


const routes: Routes = 
[

{
  path:"healthyshop",
  component:ProductsListComponent
},
{
  path:"store",
  component:ProductsListComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
