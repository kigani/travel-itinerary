import { Component, OnInit } from '@angular/core';
import {TravelDetailsService} from "../../services/travel-details.service";
import * as user from '../../shared/user.mock';
import {TravelDetails} from "../travel-details/travel-details";

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss']
})
export class MatchesComponent implements OnInit {
  events: TravelDetails[] = [];
  constructor(private travelDetailsService: TravelDetailsService) { }

  ngOnInit() {
   this.getDetails(user.userId)
  }

  getDetails(userId): void {
    let list: string[] = [];
    this.travelDetailsService.getAllTravelDetails(userId).then(travelDetails => {
      for(var i in travelDetails) {
       var schedule = travelDetails[i].schedule;
        for(var j in schedule) {
          if(schedule[j].type == 'event') {
            schedule[j]['date'] = travelDetails[i].date
            this.events.push(schedule[j]);
          }
        }
      }
    });
  }
}
