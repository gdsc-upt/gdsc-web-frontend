import { Component } from '@angular/core';
import { IMenuItem } from '@gdsc/models';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  menuItems: IMenuItem[] = [
    {
      name: 'Home',
      type: 'button',
      link: '',
      id: '1',
      created: '',
      updated: ''
    },
    {
      name: 'Contact',
      type: 'button',
      link: '/contact',
      id: '2',
      created: '',
      updated: ''
    },
    {
      name: 'Articles',
      type: 'button',
      link: '/articles',
      id: '3',
      created: '',
      updated: ''
    },
    {
      name: 'About Us',
      type: 'button',
      link: '/about-us',
      id: '4',
      created: '',
      updated: ''
    },
    {
      name: 'Events',
      type: 'button',
      link: '/events',
      id: '4',
      created: '',
      updated: ''
    },
  ];
}
