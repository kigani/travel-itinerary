import { Injectable } from '@angular/core';
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {DailySchedule} from "../components/travel-details/daily-schedule";


@Injectable()
export class TravelDetailsService {
  private travelDetailsUrl: string = 'api/travelDetails';

  constructor(private http: Http) {
  }

  getTravelDetails(userId, date: string): Promise<DailySchedule[]> {
    const url = this.travelDetailsUrl + '?userId=' + userId + '&date=' + date;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  getInitialTravelDetails(userId): Promise<DailySchedule[]> {
    const url = this.travelDetailsUrl + '?userId=' + userId + '&_sort=date&_limit=1';
    return this.http.get(url)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
