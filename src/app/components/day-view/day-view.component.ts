import { Component, OnInit, Input } from '@angular/core';
import {TravelDetailsService} from "../../services/travel-details.service";
import {TravelDetails} from "../../shared/travel-details";
import * as user from '../../shared/user.mock';
import {Subscription} from "rxjs/Subscription";
import { ActivatedRoute } from '@angular/router';
import {DailySchedule} from "../../shared/daily-schedule";

@Component({
  selector: 'app-day-view',
  templateUrl: './day-view.component.html',
  styleUrls: ['./day-view.component.scss']
})
export class DayViewComponent implements OnInit {
  pageChangeSubscription: Subscription;
  isMatchToday: boolean = false;
  itineraries: DailySchedule[] = [];
  matchDetails: TravelDetails;
  @Input() isSingleDayView: boolean = true;

  constructor(private travelDetailsService: TravelDetailsService,  private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.pageChangeSubscription = this.route.params.subscribe(params => {
      if(params['id']) {
        this.getDailySchedule(user.userId, params['id'], null);
      } else {
        this.getDailySchedule(user.userId, null, 2);
      }
    });
  }

  ngOnDestroy(): void {
    this.pageChangeSubscription.unsubscribe();
  }

  private getDailySchedule(userId, date, limit): void {
    this.travelDetailsService.getTravelDetails(userId, date, limit).then(travelDetails => {
      return Promise.all(Object.keys(travelDetails).map((i)=> {
          return this.itineraries.push(travelDetails[i]);
      }));
    }).then((result)=> {
      if(this.isSingleDayView && date) {
        let schedule = this.itineraries[0].schedule;
        return Promise.all(Object.keys(schedule).map((i)=> {
          if(schedule[i].type === "match") {
            this.isMatchToday = true;
            return this.matchDetails = schedule[i];
          }
        }));
      }
    });
  }
}
