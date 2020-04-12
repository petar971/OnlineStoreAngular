import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SliderComponent } from './slider/slider.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductCreateComponent } from './adminControl/product-create/product-create.component';



const routes: Routes = 
[
{
  path:"",
  component:SliderComponent
}
,
{
  path:"products/:id",
  component:ProductDetailsComponent
},
{
  path:"admin/products/create",
  component:ProductCreateComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
