import { Component, OnInit } from '@angular/core';
import {TravelDetailsService} from "../../services/travel-details.service";
import {TravelDetails} from "../travel-details/travel-details";
import * as user from '../../shared/user.mock';
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-day-view',
  templateUrl: './day-view.component.html',
  styleUrls: ['./day-view.component.scss']
})
export class DayViewComponent implements OnInit {
  dailySchedule: TravelDetails[];
  subscription: Subscription;
  constructor(private travelDetailsService: TravelDetailsService) {
  }

  ngOnInit() {
    this.subscription = this.travelDetailsService.travelDetailsData.subscribe(e => {
      if(e != null) {
        this.getDailySchedule(user.userId, e);
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getDailySchedule(userId, date): void {
     this.travelDetailsService.getTravelDetails(userId, date).then(travelDetails => {
        if(travelDetails.length) {
          this.dailySchedule = travelDetails[0].schedule;
        } else {
          this.dailySchedule = null;
        }
      });
  }
}
