import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@gdsc/env';

@Injectable({
  providedIn: 'root'
})
export class RedirectService {
  private readonly _apiUrl = environment.apiUrl + 'redirects';
  private _all: Record<string, string> = {};

  constructor(private readonly _http: HttpClient) {
  }

  async load() {
    this._all = await this._http.get<Record<string, string>>(this._apiUrl).toPromise()
      .catch(() => ({}));
  }

  get(path: string) {
    return this._all[path];
  }
}
