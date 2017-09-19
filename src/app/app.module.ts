import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule }    from '@angular/http';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';

// Imports the Calendar module
import { CalendarModule } from '@progress/kendo-angular-dateinputs';
import { DayViewComponent } from './components/day-view/day-view.component';
import { MyDatePickerModule } from 'mydatepicker';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { TravelDetailsComponent } from './components/travel-details/travel-details.component';
import {TravelDetailsService} from "./services/travel-details.service";
import {EventService} from "./services/event.service";
import { MatchesComponent } from './components/matches/matches.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { PageNavigationComponent } from './components/page-navigation/page-navigation.component';
import { IconComponent } from './components/icon/icon.component';

const appRoutes: Routes = [
  {path: '', component: MatchesComponent},
  {path: 'calendar', component: CalendarComponent},
  {path: 'daily-schedule/:id', component: DayViewComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    DayViewComponent,
    PageHeaderComponent,
    TravelDetailsComponent,
    MatchesComponent,
    CalendarComponent,
    PageNavigationComponent,
    IconComponent,
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
