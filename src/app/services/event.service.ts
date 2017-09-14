import { Injectable } from '@angular/core';
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

interface Event {
  name: string;
  timeRange: string;
  userId: string;
  dates: string[];
}

@Injectable()
export class EventService {
  private eventUrl: string =  'api/events';

  constructor(private http: Http) {
  }

  getEvent(userId: string): Promise<Event> {

    return this.http.get(this.eventUrl)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
