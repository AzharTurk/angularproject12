import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../classes/product.interface';
import { HttpService } from './http.service';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  currency: string = "INR";

  constructor(private _httpService: HttpService, private _toastr: ToastrService) { }

  private allProducts(): Observable<Product[]> {
    return this._httpService.get(environment.BASE_API_PATH + "ProductMaster/GetProductList");
  }

  getProducts() {
    return this.allProducts();
  }

  getProduct(id: number): Observable<Product> {
    return this.allProducts().map(item => item.find(p => p.id === id));
  }

  getProductByCategory(catg: string): Observable<Product[]> {
    return this.allProducts().map(item => item.filter((p: Product) => {
      if (catg === 'all') {
        return true;
      }
      return p.category === catg;
    }));
  }

}
