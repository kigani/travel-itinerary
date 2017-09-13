import { Injectable } from '@angular/core';
import {DailySchedule} from "./mock-travel-details";
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TravelDetailsService {
  private travelDetailsUrl: string = 'http://localhost:3000/travelDetails';

  constructor(private http: Http) {
  }

  getTravelDetails(id: string, date: string): Promise<DailySchedule[]> {
    const url = this.travelDetailsUrl + '?userId=' + id + '&date=' + date;

    console.log(url)
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
