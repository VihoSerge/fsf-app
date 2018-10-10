import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Match } from '../models/match';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  URL = '/api/matchs/';

  constructor(private http: HttpClient) { }

  get(): Observable<Match[]>{
    return this.http.get<any[]>(this.URL);
  }

  post(match: Match) {
    return this.http.post(this.URL, match);
  }

  delete(id: Number): Observable<{}>{
    return this.http.delete(this.URL + id);
  }
}
