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

  constructor() {
  }

  ngOnInit() {
    this.setIconClass();
  }

  setIconClass(): void {
    switch (this.data.type) {
      case this.travelDetailsType.Flight:
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
