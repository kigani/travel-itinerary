import { Component, OnInit } from '@angular/core';
import {TravelDetailsService} from "../../services/travel-details.service";
import {TravelDetails} from "../travel-details/travel-details";
import * as user from '../../shared/user.mock';

@Component({
  selector: 'app-day-view',
  templateUrl: './day-view.component.html',
  styleUrls: ['./day-view.component.scss']
})
export class DayViewComponent implements OnInit {
  dailySchedule: TravelDetails[];

  constructor(private traveldetailsService: TravelDetailsService) {
  }

  ngOnInit() {
    this.getDailySchedule(user.userId, '15-09-2017');
  }

  getDailySchedule(userId, date): void {
     this.traveldetailsService.getTravelDetails(userId, date).then(travelDetails => {
      if(travelDetails.length) {
        this.dailySchedule = travelDetails[0].schedule;
      } else {
        this.dailySchedule = null;
      }
      });
  }

  onNewDateSelect(date): void {
    this.getDailySchedule(user.userId, date);
  }
}
