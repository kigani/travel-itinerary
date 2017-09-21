import { Injectable } from '@angular/core';
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {DailySchedule} from "../shared/daily-schedule";

@Injectable()
export class TravelDetailsService {
  private travelDetailsUrl: string = 'api/travelDetails';

  constructor(private http: Http) {
  }

  getTravelDetails(userId, date?: string, limit?: number): Promise<DailySchedule[]> {
    let url;
    if(!date && !limit) {
       url = this.travelDetailsUrl + '?userId=' + userId;
    }else if(date) {
       url = this.travelDetailsUrl + '?userId=' + userId + '&date=' + date;
    } else {
       url = this.travelDetailsUrl + '?userId=' + userId + '&_sort=date&_limit=' + limit;
    }
    const apiUrl = url;

    return this.http.get(apiUrl)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
