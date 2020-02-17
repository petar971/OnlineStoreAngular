import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecommendProductsComponent } from './recommend-products/recommend-products.component';
import { SliderComponent } from './slider/slider.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [SliderComponent,RecommendProductsComponent, HomeComponent],
  imports: [
    CommonModule
  ],
  exports:[
  RecommendProductsComponent,
  SliderComponent,
  HomeComponent
  ]
})
export class HomeModule { }
