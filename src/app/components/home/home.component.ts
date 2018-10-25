import { Component, OnInit, OnDestroy } from '@angular/core';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  restaurants: any[];
  restaurantSubscription: Subscription;

  constructor(private rService: RestaurantService) {
  }

  ngOnInit() {
    this.restaurantSubscription = this.rService.restaurants.subscribe(val => {
      this.restaurants = val;
    });
  }
  ngOnDestroy() {
    this.restaurantSubscription.unsubscribe();
  }
}
