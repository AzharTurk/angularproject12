import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/classes/product.interface';
import * as $ from 'jquery';

@Component({
  selector: 'app-product-tab',
  templateUrl: './product-tab.component.html',
  styleUrls: ['./product-tab.component.scss']
})
export class ProductTabComponent implements OnInit {
  @Input() products: Product[] = [];
  constructor() { }

  ngOnInit(): void {
    $("#tab-1").show();
    $(".tabs li a").on('click', function (e) {
      e.preventDefault();
      $(this).parent().parent().find('li').removeClass('current');
      $(this).parent().addClass('current');

      let currentHref= $(this).attr('href');
      $("#" + currentHref).show();
      $(this).parent().parent().parent().find(".tab-content").not("#" + currentHref).hide();
    });
  }

}
