import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/shared/service/http.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-collection-banner',
  templateUrl: './collection-banner.component.html',
  styleUrls: ['./collection-banner.component.scss']
})
export class CollectionBannerComponent implements OnInit {
  category: any;
  constructor(private _httpService: HttpService) { }

  ngOnInit(): void {
    this._httpService.get(environment.BASE_API_PATH + "Category/GetAll").subscribe(res => {
      this.category = res.data;
    });
  }

}
