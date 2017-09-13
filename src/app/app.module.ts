import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule }    from '@angular/http';

import { AppComponent } from './app.component';

// Imports the Calendar module
import { CalendarModule } from '@progress/kendo-angular-dateinputs';
import { DayViewComponent } from './components/day-view/day-view.component';
import { CalendarPanelComponent } from './components/calendar-panel/calendar-panel.component';
import { MyDatePickerModule } from 'mydatepicker';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { TravelDetailsComponent } from './components/travel-details/travel-details.component';
import {TravelDetailsService} from "./services/travel-details.service";
import {EventService} from "./services/event.service";

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
  providers: [TravelDetailsService, EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
