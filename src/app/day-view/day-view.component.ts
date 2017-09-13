import { Component, OnInit } from '@angular/core';
import {TravelDetailsType} from "../travel-details/TravelDetailsType";
import {TravelDetailsService} from "../services/travel-details.service";

@Component({
  selector: 'app-day-view',
  templateUrl: './day-view.component.html',
  styleUrls: ['./day-view.component.scss'],
  providers: [TravelDetailsService]
})
export class DayViewComponent implements OnInit {
  travelDetailsType;
  travelDetails;
  constructor(private traveldetailsService: TravelDetailsService) {
  }

  ngOnInit() {
    this.getTravelDetails();
  }

  getTravelDetails(): void {
     this.traveldetailsService.getTravelDetails('123', '2017-09-15').then(travelDetails => {
       this.travelDetails = travelDetails[0].schedule});
  }
}
