import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { Match } from '../models/match';

@Injectable({
  providedIn: 'root'
})
export class StandingService {
  URL = '/api/standings/';

  constructor(private http: HttpClient) { }

  get(): Observable<any[]>{
    return this.http.get<any[]>(this.URL);
  }
}
