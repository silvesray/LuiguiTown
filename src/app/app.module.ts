import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { FooterComponent } from './components/partials/footer/footer.component';
import { NotFoundComponent } from './components/partials/not-found/not-found.component';
import { HeaderPageComponent } from './components/partials/header-page/header-page.component';
import { QuickViewModalComponent } from './components/partials/modal/quick-view-modal/quick-view-modal.component';
import { AddToCartModalComponent } from './components/partials/modal/add-to-cart-modal/add-to-cart-modal.component';
import { DeleteProductComponent } from './components/partials/modal/delete-product/delete-product.component';
import { SingleProductComponent } from './townHall/single-product/single-product.component';
import { CartComponent } from './townHall/cart/cart.component';
import { AddProductComponent } from './townHall/add-product/add-product.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    HeaderPageComponent,
    QuickViewModalComponent,
    AddToCartModalComponent,
    DeleteProductComponent,
    SingleProductComponent,
    CartComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
