import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { CartItem } from '../classes/cart-items.interface';
import { Product } from '../classes/product.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {
 prtoducts = JSON.parse(localStorage.getItem("cartItem")) || [];
 cartItems: BehaviorSubject<CartItem[]> = new BehaviorSubject<CartItem[]>([]);
  constructor( private _tostr : ToastrService) { }


  //  get catr items
  getItems():Observable<CartItem[]>{
    return of(this.prtoducts);
  }

  // get Total amount of cart Items
  getTotalAmount():Observable<number>{
    return this.cartItems.map(()=>{
      return this.prtoducts.reduce((total:number,item:CartItem)=>{
      return total + (item.product.price * item.quantity)
      });
    });
  }

  // Add to cart
  addToCart(product:Product,qty:number = 1):CartItem | boolean{
    let item : CartItem | boolean = false;
    // If Product already exits in cart list (update qunatity in cart list)
    let hasItem = this.prtoducts.find((item:CartItem,index:number)=>{
      if(item.product.id == product.id){
        // let Qty = this.products[index].quantity + qty;
        let Qty = item.quantity + qty;
        let stock = true;
        if(Qty !=0 && stock){
          this.prtoducts[index].quantity = Qty;
          localStorage.setItem("cartItem",JSON.stringify(this.prtoducts))
          this._tostr.success("Product has been added in cart ||", "Cart");
        }
        return true;
      }
      return false;
    });
    if(!hasItem){
      item = {product: product,quantity:qty};
      this.prtoducts.push(item);
      localStorage.setItem("cartItem",JSON.stringify(this.prtoducts))
      this._tostr.success("Product has been added in cart ||", "Cart");
    }

  }

  calculateStockCounts(product:CartItem,quantity:number){
    let qty = product.quantity + quantity;
    let stock = product.product.stock;
    if(stock < qty){
      this._tostr.error("You cannot add more item in cart !!","Cart");
      return false;
    }
    return true;
  }
}
