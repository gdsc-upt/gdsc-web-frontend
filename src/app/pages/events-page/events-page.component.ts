import { Component } from '@angular/core';

export interface EventTable {
  name: string;
  date: string;
  status: string;
}

const EVENT_DATA: EventTable[] = [
  {name: 'Angular Workshop', date: '29/05/2021 19:00', status: 'Event in progress'},
  {name: '.NET Workshop', date: '29/05/2021 19:00', status: 'Sign-up Closed'},
  {name: 'C# Workshop', date: '29/05/2021 19:00', status: 'Sign-up Open'},
  {name: 'Angular Workshop', date: '29/05/2021 19:00', status: 'Sign-up Open'},
  {name: '.NET Workshop', date: '29/05/2021 19:00', status: 'Sign-up Closed'},
  {name: '.NET Workshop', date: '29/05/2021 19:00', status: 'Sign-up Closed'},
  {name: '.NET Workshop', date: '29/05/2021 19:00', status: 'Sign-up Closed'},
  {name: '.NET Workshop', date: '29/05/2021 19:00', status: 'Sign-up Closed'}
];

@Component({
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.scss']
})
export class EventsPageComponent {
  displayedColumns: string[] = ['name', 'date', 'status'];
  dataSource = EVENT_DATA;

  colorPick(element: { name: string, date: string, status: string }): string {
    if (element.status === 'Event in progress')
      return '#DB4437';
    else if (element.status === 'Sign-up Closed')
      return '#F4B400';
    else if (element.status === 'Sign-up Open')
      return '#0F9D58';
  }

  getStatusForStyling(arg1: string, arg2: string): string {
    if (arg2) {
      return arg1 + ' ' + arg2;
    }
    else {
      return arg1;
    }
  }
}
