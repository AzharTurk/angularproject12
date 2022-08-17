import { Component, OnInit } from '@angular/core';
import { Menu, MENUITEMS } from './navbar-items';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  //menuItems: Menu[];
  menuItems: any;

  constructor() { }

  ngOnInit(): void {
    this.menuItems = MENUITEMS;
  }

}
