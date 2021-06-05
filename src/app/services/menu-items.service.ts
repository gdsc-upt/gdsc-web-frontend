import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMenuItem } from '@gdsc/models';
import { environment } from '@gdsc/env/environment';

@Injectable({
  providedIn: 'root'
})
export class MenuItemsService {
  private readonly _apiUrl = environment.apiUrl + 'menu-items';

  constructor(private readonly _http: HttpClient) {
  }

  get(): Observable<IMenuItem[]> {
    return this._http.get<IMenuItem[]>(this._apiUrl);
  }
}
