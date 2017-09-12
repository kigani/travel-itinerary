import { Injectable } from '@angular/core';
import {TRAVEL_DETAILS} from "./mock-travel-details";

@Injectable()
export class TravelDetailsService {
    getTravelDetails() {
      return TRAVEL_DETAILS;
    }
}
