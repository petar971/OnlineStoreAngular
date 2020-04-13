import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SliderComponent } from './slider/slider.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductCreateComponent } from './adminControl/product-create/product-create.component';
import { ListproductComponent } from './adminControl/listproduct/listproduct.component';
import { StoreComponent } from './store/store.component';
import { ProductGridComponent } from './product-grid/product-grid.component';
import { AdminPanelComponent } from './adminControl/admin-panel/admin-panel.component';
import { AuthGuard } from './auth.guard';



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
  path:"store",
  component:StoreComponent
},
{
  path:"admin",
  component:AdminPanelComponent,
  canActivate:[AuthGuard]
},
{
  path:"admin/products/create",
  component:ProductCreateComponent,
  canActivate:[AuthGuard]
},
{
  path:"admin/products/list",
  component:ListproductComponent,
  canActivate:[AuthGuard]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
