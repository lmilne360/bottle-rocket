import { Component } from '@angular/core';

import { fadeAnimation, routerTransition } from './shared/animation';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation, routerTransition] // register the animation
})
export class AppComponent  {

}
