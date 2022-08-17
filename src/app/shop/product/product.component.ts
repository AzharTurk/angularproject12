import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/classes/product.interface';
import { ProductsService } from 'src/app/shared/service/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  variantImage: string;

  constructor(public _productService: ProductsService) { }

  ngOnInit(): void {
    this.variantImage = this.product.variants.length > 0 ? this.product.variants[0].images : "";
  }

  changeVarient(img: string) {
    this.variantImage = img;
  }

  addToCart(product: Product) {
    alert("addToCart");
  }
  addToWishlist(product: Product) {
    alert("addToWishlist");
  }
  addToCompare(product: Product) {
    alert("addToCompare");
  }
}
