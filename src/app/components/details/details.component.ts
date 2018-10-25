/// <reference types="@types/googlemaps" />
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { RestaurantService } from 'src/app/services/restaurant.service';
import {} from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
// import { } from 'googlemaps';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnChanges {
  restaurant: any;
  latlng: any;

  constructor(private rService: RestaurantService, private route: ActivatedRoute) {}

  ngOnInit() {
    const prodId = this.route.snapshot.paramMap.get('id');
    const resArr: [] = this.rService.restaurants.getValue();
    // tslint:disable-next-line:radix
    this.restaurant = resArr[parseInt(prodId)];
    this.setLatLong();
  }

  ngOnChanges() {
    this.setLatLong();
  }

  setLatLong() {
    if (this.restaurant) {
      this.latlng = {
        lat: this.restaurant.location.lat,
        lng: this.restaurant.location.lng
      };
    } else if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition( pos => {
        this.latlng = {lat: pos.coords.latitude, lng: pos.coords.longitude};
      });
    } else {
      // fallback latlng value
      this.latlng = { lat: 18.5793, lng: 73.8143 };
    }
  }
}
