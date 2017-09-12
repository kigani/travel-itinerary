import { Component, OnInit, Input } from '@angular/core';
import {TravelDetailsType} from "./TravelDetailsType";

@Component({
  selector: 'app-travel-details',
  templateUrl: './travel-details.component.html',
  styleUrls: ['./travel-details.component.scss']
})
export class TravelDetailsComponent implements OnInit {
  travelDetailsType = TravelDetailsType;
  @Input() type: TravelDetailsType;
  icon: string;

  constructor() {
  }

  ngOnInit() {
    this.setIconClass();
  }


  setIconClass(): void {
    switch (this.type) {
      case this.travelDetailsType.Plane:
        this.icon = 'k-i-heart';
        break;
      case this.travelDetailsType.Accomodation:
        this.icon = 'k-i-copy';
        break;
      case this.travelDetailsType.Transport:
        this.icon = 'k-i-calendar';
        break;
      default:
        this.icon = '';
    }
  }
}
