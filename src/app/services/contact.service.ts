import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@gdsc/env';
import { IContact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private readonly _apiUrl = environment.apiUrl + 'contact';

  constructor(
    private readonly _http: HttpClient
  ) {
  }

  post(contact: Partial<IContact>): Promise<IContact> {
    return this._http.post<IContact>(this._apiUrl, contact).toPromise();
  }
}
