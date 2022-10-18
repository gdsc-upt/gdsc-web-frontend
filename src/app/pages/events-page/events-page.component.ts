import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../services/events.service';
import { IEvent } from '../../models/event';

@Component({
  selector: 'gdsc-events',
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.scss']
})
export class EventsPageComponent implements OnInit{

  events: IEvent[];

  constructor(private readonly _eventsService: EventsService) { }

  ngOnInit(): void {
    this._eventsService.getEvents().subscribe(data => this.events = data);
  }
}
