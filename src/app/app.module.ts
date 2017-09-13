import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule }    from '@angular/http';

import { AppComponent } from './app.component';

// Imports the Calendar module
import { CalendarModule } from '@progress/kendo-angular-dateinputs';
import { DayViewComponent } from './day-view/day-view.component';
import { CalendarPanelComponent } from './calendar-panel/calendar-panel.component';
import { MyDatePickerModule } from 'mydatepicker';
import { PageHeaderComponent } from './page-header/page-header.component';
import { TravelDetailsComponent } from './travel-details/travel-details.component';

@NgModule({
  declarations: [
    AppComponent,
    DayViewComponent,
    CalendarPanelComponent,
    PageHeaderComponent,
    TravelDetailsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CalendarModule,
    MyDatePickerModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
