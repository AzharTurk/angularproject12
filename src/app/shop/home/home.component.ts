import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/classes/product.interface';
import { ProductsService } from 'src/app/shared/service/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: Product[] = [];

  constructor(private _productsService: ProductsService) { }

  ngOnInit(): void {
    this._productsService.getProducts().subscribe(res => {
      this.products = res;
    });
  }

}
