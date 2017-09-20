import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-action-box',
  templateUrl: './action-box.component.html',
  styleUrls: ['./action-box.component.scss']
})
export class ActionBoxComponent implements OnInit {
  @Input() buttonText: string;
  @Input() bodyText: string;
  constructor() { }

  ngOnInit() {
  }

}
