import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IEvent } from '../../../../models/event';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {
  event: IEvent;
  dataSource: MatTableDataSource<IEvent>;

  constructor(@Inject(MAT_DIALOG_DATA) public data: {event: IEvent}) { }

  ngOnInit(): void {
    this.event = this.data.event;
    this.dataSource = new MatTableDataSource<IEvent>([this.event]);
  }

  displayedColumns: string[] = ['title', 'start', 'status'];

  colorPick(element: { name: string, date: string, status: string }): string {
    if (element.status === 'Event in progress')
      return '#DB4437';
    else if (element.status === 'Sign-up Closed')
      return '#F4B400';
    else if (element.status === 'Sign-up Open')
      return '#0F9D58';
  }

  rsvpStatusPick(element: { status: string }): string {
    if (element.status === 'Event in progress')
      return 'RSVP Closed';
    else if (element.status === 'Sign-up Closed')
      return 'RSVP Closed';
    else if (element.status === 'Sign-up Open')
      return 'RSVP Now';
  }

  rsvpLinkPick(element: { rsvp_link: string }): string {
      return element.rsvp_link;
  }

  getStatusForStyling(arg1: string, arg2: string): string {
    if (arg2) {
      return arg1 + ' ' + arg2;
    } else {
      return arg1;
    }
  }
}
