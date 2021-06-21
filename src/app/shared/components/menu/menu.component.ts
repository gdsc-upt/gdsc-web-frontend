import { Component, OnInit } from '@angular/core';
import { IMenuItem } from '@gdsc/models';
import { MenuItemsService } from '../../../services/menu-items.service';

@Component({
  selector: 'gdsc-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menuItems: IMenuItem[];
  menuIcons: string[] = [
    'home',
    'phone',
    'article',
    'groups',
    'event'
  ];

  constructor(private readonly _menuItemsService: MenuItemsService) {
  }

  ngOnInit(): void {
    this._menuItemsService.get().subscribe(menuItems => {
      this.menuItems = menuItems;
    });
  }
}
