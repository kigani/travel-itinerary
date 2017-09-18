import { Component, NgModule, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { DatePipe } from '@angular/common';
import {Router} from '@angular/router';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

import {MyDatePicker, IMyDpOptions, IMyDateModel, IMyDate,IMyDefaultMonth, IMyCalendarViewChanged} from "mydatepicker";
import {TravelDetailsService} from "../../services/travel-details.service";
import {EventService} from "../../services/event.service";
import * as user from '../../shared/user.mock';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  private currentDate:Date;
  private calendarShouldBeVisible:boolean = false;
  private myDatePickerOptions: IMyDpOptions;
  @ViewChild('mydp') myDatepicker;
  @Output() newDateSelect: EventEmitter<any> = new EventEmitter();
  travelDetailsData: BehaviorSubject<string>;
  itineraries: any[] = [];

  constructor(private eventService: EventService, private travelDetailsService: TravelDetailsService, private router: Router) {
    this.travelDetailsData = new BehaviorSubject<string>('');
  }

  ngOnInit() {
    this.getEventDates(user.userId);
    this.getNearestItinerary(user.userId, 2)
  }


  private createDateObject(dateStr) {
    let keysArr = ['year', 'month', 'day'];
    let valuesArr = dateStr.split('-').map((el)=> {return  parseInt(el)});

    //Convert Array of dates' string into object
    return keysArr.reduce((prev, val, i)=>{
      prev[val] = valuesArr[i];
      return prev;
    }, {})
  }

  private getEventDates(userId): void {
    let date: Date;
    this.eventService.getEvent(userId).then(eventDetails => {
      this.currentDate = new Date(eventDetails[0].dates.sort()[0]);
      this.createCalendar(eventDetails[0].dates.map(this.createDateObject));
    });
  }

  private createCalendar(markedDays): void {
    this.myDatePickerOptions = {
      dateFormat: 'yyyy-mm-dd',
      showTodayBtn: false,
      yearSelector: false,
      monthSelector: false,
      markDates: [{dates: markedDays, color: '#004198'}],
      selectorWidth: '100%',
      selectorHeight: 'auto',
      inline: true
    };
  }

  private onDateChanged(event: IMyDateModel) {
    // event properties are: event.date, event.jsdate, event.formatted and event.epoc
    this.currentDate = event.jsdate;
    this.travelDetailsService.travelDetailsData.next(event.formatted);
    this.redirect(event.formatted);
  }

  redirect(date: string) {
    this.router.navigate(['./daily-schedule/'+ date]);
  }

  private createMonthLabel(year: number):void {
    this.myDatepicker.visibleMonth.monthTxt = this.myDatepicker.visibleMonth.monthTxt + ' ' + year;
  }

  private onCalendarViewChanged(event: IMyCalendarViewChanged) {
    this.createMonthLabel(event.year)
  }

  getNearestItinerary(userId, limit): void {
    this.travelDetailsService.getNearestTravelDetails(userId, limit).then(travelDetails => {
      for(var i in travelDetails) {
        this.itineraries.push(travelDetails[i]);
      }
    });
  }

}
