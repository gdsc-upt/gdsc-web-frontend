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
      id: 1,
      logoName: 'home'
    },
    {
      name: 'Contact',
      type: 'button',
      link: '/contact',
      id: 2,
      logoName: 'contact_support'
    },
    {
      name: 'Articles',
      type: 'button',
      link: '/articles',
      id: 3,
      logoName: 'article'
    },
    {
      name: 'About Us',
      type: 'button',
      link: '/about-us',
      id: 4,
      logoName: 'people'
    },
    {
      name: 'Events',
      type: 'button',
      link: '/events',
      id: 4,
      logoName: 'event'
    },
  ];
}
