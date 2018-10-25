import { Component, Input } from '@angular/core';

interface LatLng {
  lat: number;
  lng: number;
}

@Component({
  selector: 'app-map',
  template: `
   <div *ngIf="latlng">
     <agm-map [latitude]="latlng.lat" [longitude]="latlng.lng" [zoom]="12">
     <agm-marker [latitude]="latlng.lat" [longitude]="latlng.lng">
       <agm-info-window>{{rName}}</agm-info-window>
     </agm-marker>
     </agm-map>
   </div>
  `,
  styles: ['agm-map { height: 300px; width: auto; }']
})
export class MapComponent {
  @Input()
  latlng: LatLng;
  @Input()
  rName: string;

  constructor() {}
}
