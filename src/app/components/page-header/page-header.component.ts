import { Component, OnInit } from '@angular/core';
import {EventService} from "../../services/event.service";

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {
  private eventName: string;
  private eventTimeRange: string;

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.getEventDetails('123');
  }

  private getEventDetails(userId): void {
    this.eventService.getEvent(userId).then(eventDetails => {
        this.eventName = eventDetails[0].name;
        this.eventTimeRange = eventDetails[0].timeRange;
    });
  }
}
