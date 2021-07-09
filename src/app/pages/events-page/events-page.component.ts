import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IEvent } from '../../models/event';
import { MatDialog } from '@angular/material/dialog';

@Component({
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.scss']
})
export class EventsPageComponent implements OnInit {
  displayedColumns: string[] = ['title', 'start', 'status'];
  events: IEvent[] = [
    {
      id: '0',
      created: '',
      updated: '',
      title: 'Angular Workshop',
      description: 'salut',
      image: '',
      status: 'Event in progress',
      start: new Date('12-07-2021, 13:00'),
      end: new Date('12-07-2021, 15:00')
    },
    {
      id: '1',
      created: '',
      updated: '',
      title: 'C# Workshop',
      description: 'salut',
      image: '',
      status: 'Sign-up Closed',
      start: new Date('10-07-2021, 12:15'),
      end: new Date('10-07-2021, 13:30')
    },
    {
      id: '2',
      created: '',
      updated: '',
      title: 'Angular Workshop',
      description: 'salut',
      image: '',
      status: 'Sign-up Open',
      start: new Date('11-07-2021, 14:00'),
      end: new Date('11-07-2021, 15:00')
    },
    {
      id: '3',
      created: '',
      updated: '',
      title: '.NET Workshop',
      description: 'salut',
      image: '',
      status: 'Sign-up Closed',
      start: new Date('12-07-2021, 17:00'),
      end: new Date('12-07-2021, 19:00')
    },
    {
      id: '4',
      created: '',
      updated: '',
      title: '.NET Workshop',
      description: 'salut',
      image: '',
      status: 'Sign-up Closed',
      start: new Date('12-07-2021, 17:00'),
      end: new Date('12-07-2021, 19:00')
    },
    {
      id: '5',
      created: '',
      updated: '',
      title: '.NET Workshop',
      description: 'salut',
      image: '',
      status: 'Sign-up Closed',
      start: new Date('12-07-2021, 17:00'),
      end: new Date('12-07-2021, 19:00')
    },
    {
      id: '6',
      created: '',
      updated: '',
      title: '.NET Workshop',
      description: 'salut',
      image: '',
      status: 'Sign-up Closed',
      start: new Date('12-07-2021, 17:00'),
      end: new Date('12-07-2021, 19:00')
    },
    {
      id: '7',
      created: '',
      updated: '',
      title: '.NET Workshop',
      description: 'salut',
      image: '',
      status: 'Sign-up Closed',
      start: new Date('12-07-2021, 17:00'),
      end: new Date('12-07-2021, 19:00')
    },
    {
      id: '8',
      created: '',
      updated: '',
      title: '.NET Workshop',
      description: 'salut',
      image: '',
      status: 'Sign-up Closed',
      start: new Date('12-07-2021, 17:00'),
      end: new Date('12-07-2021, 19:00')
    }
  ];
  dataSource: MatTableDataSource<IEvent>;

  constructor(public dialog: MatDialog) {
  }

  openDialog() {
    const dialogRef = this.dialog.open(EventDetails);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

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
    } else {
      return arg1;
    }
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<IEvent>(this.events);
  }
}

@Component({
  templateUrl: './event-details.html',
  styleUrls: ['./event-details.scss']
})

export class EventDetails {
}
