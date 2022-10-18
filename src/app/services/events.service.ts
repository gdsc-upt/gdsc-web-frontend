import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IEvent } from '../models/event';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private readonly _apiUrl = 'https://gdsc.community.dev/api/chapter/511/event';

  constructor(private readonly _http: HttpClient) { }

  getEvents(): Observable<IEvent[]>{
    return this._http.get<IEvent[]>(this._apiUrl).pipe(map(data => data['results']));
  }

}
