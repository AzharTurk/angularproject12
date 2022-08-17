import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class MenuNavService {

  constructor(@Inject(DOCUMENT) private document: Document) { }


  openNav() {
    this.document.getElementById("mySidenav")?.classList.add('open-side');
  }
  closeNav() {
    this.document.getElementById("mySidenav")?.classList.remove('open-side');
  }
}
