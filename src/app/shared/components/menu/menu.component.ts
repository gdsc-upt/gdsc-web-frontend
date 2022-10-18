import { Component, OnInit } from '@angular/core';
import { IMenuItem } from '@gdsc/models';
import { MenuItemsService } from '../../../services/menu-items.service';
import {Router} from '@angular/router';

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

  constructor(private readonly _menuItemsService: MenuItemsService, private _router: Router) {
  }

  ngOnInit(): void {
    this._menuItemsService.get().subscribe(menuItems => {
      this.menuItems = menuItems;
    });
  }

  redirect(item: IMenuItem) {
    this._router.navigate([item.link]);
  }
}
