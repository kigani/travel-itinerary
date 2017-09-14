import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule }    from '@angular/http';
import { RouterModule, Routes} from '@angular/router';

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
import { MatchesComponent } from './components/matches/matches.component';
import { CalendarComponent } from './components/calendar/calendar.component';

const appRoutes: Routes = [
  {path: '', component: MatchesComponent},
  {path: 'calendar', component: CalendarComponent},
  {path: 'day-view', component: DayViewComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    DayViewComponent,
    CalendarPanelComponent,
    PageHeaderComponent,
    TravelDetailsComponent,
    MatchesComponent,
    CalendarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CalendarModule,
    MyDatePickerModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [TravelDetailsService, EventService],
  bootstrap: [AppComponent, []]
})
export class AppModule { }
