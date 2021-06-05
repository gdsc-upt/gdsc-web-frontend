import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IFaq } from '@gdsc/models';
import { environment } from '@gdsc/env/environment';

@Injectable({
  providedIn: 'root'
})
export class FaqsService {
  private readonly _apiUrl = environment.apiUrl + 'faqs';

  constructor(
    private readonly _http: HttpClient
  ) {
  }

  get(): Observable<IFaq[]> {
    return this._http.get<IFaq[]>(this._apiUrl);
  }
}
