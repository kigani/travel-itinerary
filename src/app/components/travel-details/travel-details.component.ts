import { Component, OnInit, Input } from '@angular/core';

enum TravelDetailsType {
  Flight = <any>'flight',
  Accomodation = <any>'accomodation',
  Transport = <any>'transport',
  Match = <any>'match'
}

@Component({
  selector: 'app-travel-details',
  templateUrl: './travel-details.component.html',
  styleUrls: ['./travel-details.component.scss'],
})
export class TravelDetailsComponent implements OnInit {
  travelDetailsType = TravelDetailsType;
  @Input() data;
  icon: string;
  type: string;

  constructor() {
  }

  ngOnInit() {
    this.setIconClass();
    this.type = this.data.type;
  }

  setIconClass(): void {
    switch (this.data.type) {
      case this.travelDetailsType.Flight:
        this.icon = 'plane';
        break;
      case this.travelDetailsType.Accomodation:
        this.icon = 'bed';
        break;
      case this.travelDetailsType.Transport:
        this.icon = 'car';
        break;
      case this.travelDetailsType.Match:
        this.icon = '';
        break;
      default:
        this.icon = '';
    }
  }
}
