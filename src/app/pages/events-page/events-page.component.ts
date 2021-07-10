import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IEvent } from '../../models/event';
import { MatDialog } from '@angular/material/dialog';
import { EventDetailsComponent } from './components/event-details/event-details.component';

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
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
      image: '',
      status: 'Event in progress',
      start: new Date('12-07-2021, 13:00'),
      end: new Date('12-07-2021, 15:00'),
      rsvp_link: 'https://material.angular.io/components/dialog/overview'
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
      end: new Date('10-07-2021, 13:30'),
      rsvp_link: ''
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
      end: new Date('11-07-2021, 15:00'),
      rsvp_link: 'https://material.angular.io/components/dialog/overview'
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
      end: new Date('12-07-2021, 19:00'),
      rsvp_link: ''
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
      end: new Date('12-07-2021, 19:00'),
      rsvp_link: ''
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
      end: new Date('12-07-2021, 19:00'),
      rsvp_link: ''
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
      end: new Date('12-07-2021, 19:00'),
      rsvp_link: ''
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
      end: new Date('12-07-2021, 19:00'),
      rsvp_link: ''
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
      end: new Date('12-07-2021, 19:00'),
      rsvp_link: ''
    }
  ];
  dataSource: MatTableDataSource<IEvent>;

  constructor(public dialog: MatDialog) {
  }

  openDialog(element: IEvent) {
    const dialogRef = this.dialog.open(EventDetailsComponent, {
      data: {event: element}
    });

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
