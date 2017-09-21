import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Subscription} from "rxjs/Subscription";

import {TravelDetailsService} from "../../services/travel-details.service";
import {TravelDetails} from "../../shared/travel-details";
import * as user from '../../shared/user.mock';
import {DailySchedule} from "../../shared/daily-schedule";
import {EventService} from "../../services/event.service";

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
  nextDate: string;
  @Input() isSingleDayView: boolean = true;

  constructor(private travelDetailsService: TravelDetailsService, private eventService: EventService, private route: ActivatedRoute,  private router: Router) {
  }

  ngOnInit() {
    this.pageChangeSubscription = this.route.params.subscribe(params => {
      if(params['id']) {
        this.getDailySchedule(user.userId, params['id'], null);
        this.getEventDates(user.userId, params['id']);
      } else {
        this.getDailySchedule(user.userId, null, 2);
      }
    });
  }

  private goToNextDay(e): void {
    e.preventDefault();
    if(this.nextDate) {
      this.router.navigate(['./daily-schedule/'+ this.nextDate]);
    }
  }

  ngOnDestroy(): void {
    this.pageChangeSubscription.unsubscribe();
  }

  private getEventDates(userId, date): void {
    this.eventService.getEvent(userId)
      .then(eventDetails => {
     return eventDetails[0].dates.sort();
    })
    .then(dates => {
      let index = dates.indexOf(date);
      this.nextDate = dates[index+1];
    });
  }

  private getDailySchedule(userId, date, limit): void {
    this.travelDetailsService.getTravelDetails(userId, date, limit)
      .then(travelDetails => {
          return this.itineraries = travelDetails;
    }).then((result)=> {
      if(this.isSingleDayView && date) {
        let schedule = result[0].schedule;
        for(let i in schedule) {
          if(schedule[i].type === "match") {
            this.isMatchToday = true;
            return this.matchDetails = schedule[i];
          }
        }
      }
    });
  }
}
