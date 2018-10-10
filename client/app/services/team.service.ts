import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Team } from '../models/team';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  URL = '/api/teams/';

  constructor(private http: HttpClient) { }

  get(): Observable<Team[]>{
    return this.http.get<any[]>(this.URL);
  }

  post(team: Team) {
    return this.http.post(this.URL, team);
  }

  delete(id: Number): Observable<{}>{
    return this.http.delete(this.URL + id);
  }
}
