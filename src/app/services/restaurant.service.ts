import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
   url =  'https://s3.amazonaws.com/br-codingexams/restaurants.json';
  constructor(private http: HttpClient) { }

  getRestaurants() {
    return this.http.get(this.url);
  }
}
