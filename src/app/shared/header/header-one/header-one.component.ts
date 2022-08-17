import { Component, Inject, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { MenuNavService } from '../../service/menu-nav.service';
// import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header-one',
  templateUrl: './header-one.component.html',
  styleUrls: ['./header-one.component.scss']
})
export class HeaderOneComponent implements OnInit {

  // constructor(@Inject(DOCUMENT) private document: Document) { }
  constructor(public _menuNavService: MenuNavService) {

  }

  ngOnInit(): void {
    $.getScript('assets/js/menu.js');
  }

  // openNav() {
  //   //$('#mySidenav').addClass("open-side");
  //   //this.document.getElementById("mySidenav")?.classList.add('open-side');
  //   this._menuNavService.openNav();
  // }
  // closeNav() {
  //   //$('#mySidenav').removeClass("open-side");
  //   //this.document.getElementById("mySidenav")?.classList.remove('open-side');
  //   this._menuNavService.closeNav();
  // }

}
