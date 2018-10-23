import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  restaurants: Observable<[]>;
  selected: any;
  active: boolean;
  constructor(private rService: RestaurantService) { }

  ngOnInit() {
    this.active = false;
  this.restaurants = this.rService.getRestaurants()
  .pipe(map((val: any) => val.restaurants));

  }

  toggleView(res?: any) {
    if (res)this.selected = res;
     this.active = !this.active;
    console.log(res);
  }

}
