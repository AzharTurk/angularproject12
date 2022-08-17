import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-copyrights',
  templateUrl: './copyrights.component.html',
  styleUrls: ['./copyrights.component.scss']
})
export class CopyrightsComponent implements OnInit {
  today = Date.now();
  
  constructor() { }

  ngOnInit(): void {
  }

}
