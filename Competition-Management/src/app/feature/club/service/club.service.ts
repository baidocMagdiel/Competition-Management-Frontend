import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Athlete} from '../model/athlete';

@Injectable({
  providedIn: 'root'
})
export class ClubService {

  private GET_ATHLETES = 'http://localhost:8080/club/getathletes/';
  private DELETE_ATHLETE = 'http://localhost:8080/person/delete/';

  constructor(private httpClient: HttpClient) {
  }

  public getAthletes(): Observable<Athlete[]> {
    const options =
      {params: new HttpParams().set('clubId', '36')};
    return this.httpClient.get<Athlete[]>(this.GET_ATHLETES, options);
  }

  public deleteAthlete(personId): Observable<Athlete> {
    const options =
      {params: new HttpParams().set('personId', personId)};
    return this.httpClient.delete(this.DELETE_ATHLETE, options);
  }

}
