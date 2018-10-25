import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  url = 'https://s3.amazonaws.com/br-codingexams/restaurants.json';
  restaurants: BehaviorSubject<any> = new BehaviorSubject([]);

  constructor(private http: HttpClient) {
    // Make the call to restaurant api once on construction
    this.getRestaurants();
  }
  getRestaurants() {
    this.http
      .get(this.url)
      .subscribe((val: any) => this.restaurants.next(val.restaurants));
  }
}
