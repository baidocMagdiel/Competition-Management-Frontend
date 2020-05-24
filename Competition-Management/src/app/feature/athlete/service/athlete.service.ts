import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Athlete} from '../../club/model/athlete';

@Injectable({
  providedIn: 'root'
})
export class AthleteService {

  private GET_ATHLETE = 'http://localhost:8080/person/find/';
  private UPDATE_ATHLETE = 'http://localhost:8080/person/update/';

  constructor(private httpClient: HttpClient) {
  }

  public getAthlete(id): Observable<Athlete> {
    const options =
      {params: new HttpParams().set('id', id)};
    return this.httpClient.get<Athlete>(this.GET_ATHLETE, options);
  }

  public updateAthlete(athlete: Athlete): Observable<Athlete> {
    return this.httpClient.put<Athlete>(this.UPDATE_ATHLETE, athlete);
  }


}
