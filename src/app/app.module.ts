import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NavComponent } from './nav/nav.component';
import { SliderComponent } from './slider/slider.component';
import { FooterComponent } from './footer/footer.component';
import { RecommendProductsComponent } from './recommend-products/recommend-products.component';
import { ProductComponent } from './product/product.component';
import { ProductService } from './services/product.service';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { NgForm, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
import { CookieService} from 'ngx-cookie-service';
import { JwtInterceptorService } from './jwt-interceptor.service';
import { ProductCreateComponent } from './adminControl/product-create/product-create.component';
import { CategoryService } from './services/category.service';

@NgModule({
  declarations: [
    
    AppComponent,
    NavComponent,
    SliderComponent,
    FooterComponent,
    RecommendProductsComponent,
    ProductComponent,
    ProductDetailsComponent,
    LoginComponent,
    RegisterComponent,
    ProductCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
    
  ],
  providers: [ProductService,UserService,CategoryService
  // {
  //   provide:HTTP_INTERCEPTORS,
  //   useClass:JwtInterceptorService,
  //   multi:true
  // }
]
  ,
  bootstrap: [AppComponent]
})
export class AppModule { }
