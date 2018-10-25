import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  template: `
    <div class="header-container">
      <div class="header-image" *ngIf="!atHome" [routerLink]="[ '/restaurants' ]"><img height='auto' src="assets/back.png"></div>
       <h3> Lunch Time </h3>
      <div class="header-image"><img height='auto' src="assets/map.png"></div>
    </div>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  atHome: boolean;
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        console.log('current url', event.url); // event.url has current url
        this.atHome = event.url === '/restaurants';
      }
    });
  }
}
