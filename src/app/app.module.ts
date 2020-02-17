import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';

import { ProductsListComponent } from './products-list/products-list.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { FooterComponent } from './footer/footer.component';
import { CategoryComponent } from './category/category.component';
import { HomeModule } from './home/home.module';
import { HomeComponent } from './home/home/home.component';

@NgModule({
  declarations: [
    
    AppComponent,
    NavComponent,
    ProductsListComponent,
    ProductCardComponent,
    FooterComponent,
    CategoryComponent
  ],
  imports: [
    HomeModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
