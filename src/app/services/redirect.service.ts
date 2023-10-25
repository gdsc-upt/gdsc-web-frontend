import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@gdsc/env';
import { BehaviorSubject } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RedirectService {
  private readonly _apiUrl = environment.apiUrl + 'redirects';
  private _all: Record<string, string> = {};
  readonly loaded$ = new BehaviorSubject(false);

  constructor(private readonly _http: HttpClient) {
  }

  async load() {
    this._all = await this._http.get<Record<string, string>>(this._apiUrl).toPromise()
      .catch(() => ({}));
    this.loaded$.next(true);
  }

  get(path: string) {
    return this.loaded$.pipe(filter(loaded => loaded), map(() => this._all[path]))
  }
}
