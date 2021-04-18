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
      link: '/contactPath',
      id: 2
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
