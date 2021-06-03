import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMenuItem } from '@gdsc/models';

@Injectable({
  providedIn: 'root'
})
export class MenuItemsService {
  private readonly _apiUrl = '/v1/';

  constructor(private readonly _http: HttpClient) {
  }

  get(): Observable<IMenuItem[]> {
    const url = `${this._apiUrl}menu-items`;
    return this._http.get<IMenuItem[]>(url);
  }
}
