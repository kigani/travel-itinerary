import { Component, NgModule, OnInit, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';
import {MyDatePicker, IMyDpOptions, IMyDateModel, IMyDate,IMyDefaultMonth, IMyCalendarViewChanged} from "mydatepicker";

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
  private selDate: IMyDate;
  @ViewChild('mydp') myDatepicker;

  constructor() {
  }

  ngOnInit() {
    let date = new Date();
    this.setDate(date);
    this.currentMonth = date.getMonth();
    this.currentYear = date.getFullYear();
  }

  private setDate(date:Date):void {
    this.currentDate = date;
  }

  private toggleCalendarVisibility():void {
    this.calendarShouldBeVisible = !this.calendarShouldBeVisible;
  }

  private myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'dd.mm.yyyy',
    showTodayBtn: false,
    yearSelector: false,
    monthSelector: false,
    markDates: [{dates: [{year: 2017, month: 9, day: 14}, {year: 2017, month: 9, day: 16}], color: '#004198'}],
    selectorWidth: '100%',
    selectorHeight: 'auto',
    inline: true
  };

  onDateChanged(event: IMyDateModel) {
    // event properties are: event.date, event.jsdate, event.formatted and event.epoc
    this.setDate(event.jsdate);
    this.calendarShouldBeVisible = false;
    this.selDate = event.date;
  }

  createMonthLabel(year: number):void {
    this.myDatepicker.visibleMonth.monthTxt = this.myDatepicker.visibleMonth.monthTxt + ' ' + year;
  }

  onCalendarViewChanged(event: IMyCalendarViewChanged) {
    this.createMonthLabel(event.year)
  }
}
