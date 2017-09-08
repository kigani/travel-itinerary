import { Component, OnInit, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-calendar-panel',
  templateUrl: './calendar-panel.component.html',
  styleUrls: ['./calendar-panel.component.scss']
})
export class CalendarPanelComponent implements OnInit {
  private currentDate: Date;

  constructor() { }

  ngOnInit() {
    this.setDate(new Date());
  }

  private setDate(date: Date): void {
    this.currentDate = date;
  }

  private onChange(value: Date): void {
    this.setDate(value)
  }
}
