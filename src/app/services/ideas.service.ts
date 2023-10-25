import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@gdsc/env';
import { IIdea } from '../models/idea';

@Injectable({
  providedIn: 'root'
})
export class IdeasService {
  private readonly _apiUrl = environment.apiUrl + 'ideas';

  constructor(
    private readonly _http: HttpClient
  ) {
  }

  post(idea: Partial<IIdea>): Promise<IIdea> {
    return this._http.post<IIdea>(this._apiUrl, idea).toPromise();
  }
}
