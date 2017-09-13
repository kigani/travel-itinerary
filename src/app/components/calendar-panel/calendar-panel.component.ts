import { Component, NgModule, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { DatePipe } from '@angular/common';
import {MyDatePicker, IMyDpOptions, IMyDateModel, IMyDate,IMyDefaultMonth, IMyCalendarViewChanged} from "mydatepicker";
import {TravelDetailsService} from "../../services/travel-details.service";
import {EventService} from "../../services/event.service";
import * as user from '../../shared/user.mock';

@Component({
  selector: 'app-calendar-panel',
  templateUrl: './calendar-panel.component.html',
  styleUrls: ['./calendar-panel.component.scss'],
})
export class CalendarPanelComponent implements OnInit {
  private currentDate:Date;
  private calendarShouldBeVisible:boolean = false;
  private myDatePickerOptions: IMyDpOptions;
  @ViewChild('mydp') myDatepicker;
  @Output() newDateSelect: EventEmitter<any> = new EventEmitter();

  constructor(private eventService: EventService) {
  }

  ngOnInit() {
    this.getEventDates(user.userId);
  }

  private toggleCalendarVisibility():void {
    this.calendarShouldBeVisible = !this.calendarShouldBeVisible;
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
    this.calendarShouldBeVisible = false;
    this.newDateSelect.emit(event.formatted);
  }

  private createMonthLabel(year: number):void {
    this.myDatepicker.visibleMonth.monthTxt = this.myDatepicker.visibleMonth.monthTxt + ' ' + year;
  }

  private onCalendarViewChanged(event: IMyCalendarViewChanged) {
    this.createMonthLabel(event.year)
  }
}
