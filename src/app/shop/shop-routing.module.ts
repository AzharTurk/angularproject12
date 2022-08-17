import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './product/cart/cart.component';
import { CheckoutComponent } from './product/checkout/checkout.component';
import { CollectionComponent } from './product/collection/collection.component';
import { CompareComponent } from './product/compare/compare.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { SuccessComponent } from './product/success/success.component';
import { WishlistComponent } from './product/wishlist/wishlist.component';

const routes: Routes = [
  { path: 'shop', component: HomeComponent },
  { path: 'cart', component: CartComponent },
  { path: 'wishlist', component: WishlistComponent },
  { path: 'compare', component: CompareComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'checkout/success', component: SuccessComponent },
  { path: 'product/details/:id', component: ProductDetailsComponent },
  { path: 'product/collection/:category', component: CollectionComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
