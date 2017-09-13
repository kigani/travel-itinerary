import { Component, NgModule, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { DatePipe } from '@angular/common';
import {MyDatePicker, IMyDpOptions, IMyDateModel, IMyDate,IMyDefaultMonth, IMyCalendarViewChanged} from "mydatepicker";
import {TravelDetailsService} from "../../services/travel-details.service";
import {EventService} from "../../services/event.service";

@Component({
  selector: 'app-calendar-panel',
  templateUrl: './calendar-panel.component.html',
  styleUrls: ['./calendar-panel.component.scss'],
})
export class CalendarPanelComponent implements OnInit {
  private currentDate:Date;
  private calendarShouldBeVisible:boolean = false;
  private currentYear: number;
  private currentMonth: number;
  private myDatePickerOptions: IMyDpOptions;
  @ViewChild('mydp') myDatepicker;
  @Output() newDateSelect: EventEmitter<any> = new EventEmitter();

  constructor(private eventService: EventService) {
  }

  ngOnInit() {
    let date = new Date();
    this.setDate(date);
    this.currentMonth = date.getMonth();
    this.currentYear = date.getFullYear();
    this.getEventDates('123');
  }

  private setDate(date:Date):void {
    this.currentDate = date;
  }

  private toggleCalendarVisibility():void {
    this.calendarShouldBeVisible = !this.calendarShouldBeVisible;
  }

  private createDateObject(dateStr) {
    let keysArr = ['day', 'month', 'year'];
    let valuesArr = dateStr.split('-').map((el)=> {return  parseInt(el)});

    //Convert Array of dates' string into object
    return keysArr.reduce((prev, val, i)=>{
      prev[val] = valuesArr[i];
      return prev;
    }, {})
  }

  private getEventDates(userId): void {
    this.eventService.getEvent(userId).then(eventDetails => {
      this.createCalendar(eventDetails[0].dates.map(this.createDateObject));
    });
  }

  private createCalendar(markedDays): void {
    this.myDatePickerOptions = {
      dateFormat: 'dd-mm-yyyy',
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
    this.setDate(event.jsdate);
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
