import { Component, OnInit } from '@angular/core';
import {TravelDetailsService} from "../../services/travel-details.service";
import {TravelDetails} from "../../shared/travel-details";
import * as user from '../../shared/user.mock';
import {Subscription} from "rxjs/Subscription";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-day-view',
  templateUrl: './day-view.component.html',
  styleUrls: ['./day-view.component.scss']
})
export class DayViewComponent implements OnInit {
  dailySchedule: TravelDetails[];
  dateChangeSubscription: Subscription;
  pageChangeSubscription: Subscription;
  constructor(private travelDetailsService: TravelDetailsService,  private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.dateChangeSubscription = this.travelDetailsService.travelDetailsData.subscribe(e => {
      if(e != null) {
        this.getDailySchedule(user.userId, e);
      }
    });

    this.pageChangeSubscription = this.route.params.subscribe(params => {
     this.getDailySchedule(user.userId, params['id'])
    });
  }

  ngOnDestroy() {
    this.dateChangeSubscription.unsubscribe();
    this.pageChangeSubscription.unsubscribe();
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
