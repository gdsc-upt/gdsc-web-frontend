import {Component, OnInit} from '@angular/core';
import {MenuItem} from '../../models/menu-item';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuItems: MenuItem[] = [
    {
      name: 'Home',
      type: 'button',
      link: '',
      id: 1
    },
    {
      name: 'Contact',
      type: 'button',
      link: '/contact',
      id: 2
    },
    {
      name: 'Articles',
      type: 'button',
      link: '/articles',
      id: 3
    },
    {
      name: 'About Us',
      type: 'button',
      link: '/about-us',
      id: 4
    },
    {
      name: 'Events',
      type: 'button',
      link: '/events',
      id: 4
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
