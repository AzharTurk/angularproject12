import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { HomeComponent } from './home/home.component';
import { LogoComponent } from './home/logo/logo.component';
import { CollectionBannerComponent } from './home/collection-banner/collection-banner.component';
import { ParallaxBannerComponent } from './home/parallax-banner/parallax-banner.component';
import { ProductSliderComponent } from './home/product-slider/product-slider.component';
import { ProductTabComponent } from './home/product-tab/product-tab.component';
import { SliderComponent } from './home/slider/slider.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './product/cart/cart.component';
import { CompareComponent } from './product/compare/compare.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { WishlistComponent } from './product/wishlist/wishlist.component';
import { CheckoutComponent } from './product/checkout/checkout.component';
import { SuccessComponent } from './product/success/success.component';
import { CollectionComponent } from './product/collection/collection.component';
import { BarRatingModule } from 'ngx-bar-rating';


@NgModule({
  declarations: [
    HomeComponent,
    LogoComponent,
    CollectionBannerComponent,
    ParallaxBannerComponent,
    ProductSliderComponent,
    ProductTabComponent,
    SliderComponent,
    ProductComponent,
    CartComponent,
    CompareComponent,
    ProductDetailsComponent,
    WishlistComponent,
    CheckoutComponent,
    SuccessComponent,
    CollectionComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    SlickCarouselModule,
    BarRatingModule
  ]
})
export class ShopModule { }
