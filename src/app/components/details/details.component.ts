/// <reference types="@types/googlemaps" />
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ViewChild } from '@angular/core';
// import { } from 'googlemaps';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnChanges {
  @Input()
  restaurant: any;
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;
  latlng: any;

  @Input() active: boolean;

  constructor() { }

  ngOnInit() {
    this.setLatLong();
    const mapProp = {
      // center: new google.maps.LatLng(18.5793, 73.8143),
      center: new google.maps.LatLng(this.latlng.lat, this.latlng.lng),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
  this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
  }
  ngOnChanges() {
    this.setLatLong();
    this.map.setCenter(this.latlng);
  }
  setLatLong() {
    if (this.restaurant) {
      this.latlng = {lat: this.restaurant.location.lat , lng: this.restaurant.location.lng};
    } else {
      this.latlng = {lat: 18.5793, lng: 73.8143};
    }
  }
}
