import { Component, OnInit } from '@angular/core';
import {TravelDetailsType} from "../travel-details/TravelDetailsType";

@Component({
  selector: 'app-day-view',
  templateUrl: './day-view.component.html',
  styleUrls: ['./day-view.component.scss']
})
export class DayViewComponent implements OnInit {
  travelDetailsType = TravelDetailsType;
  constructor() {
  }

  ngOnInit() {
  }
  setTravelDetailsType(type) {

  }
}
