import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

// Imports the Calendar module
import { CalendarModule } from '@progress/kendo-angular-dateinputs';
import { DayViewComponent } from './day-view/day-view.component';
import { CalendarPanelComponent } from './calendar-panel/calendar-panel.component';
import { MyDatePickerModule } from 'mydatepicker';

@NgModule({
  declarations: [
    AppComponent,
    DayViewComponent,
    CalendarPanelComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CalendarModule,
    MyDatePickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
