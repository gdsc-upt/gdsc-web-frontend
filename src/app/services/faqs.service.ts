import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IFaq } from '@gdsc/models';

@Injectable({
  providedIn: 'root'
})
export class FaqsService {
  private readonly _apiUrl = '/v1/';

  constructor(
    private readonly _http: HttpClient
  ) {
  }

  get(): Observable<IFaq[]> {
    const url = `${this._apiUrl}faqs`;
    return this._http.get<IFaq[]>(url);
  }
}
