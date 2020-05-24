import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Athlete} from '../../club/model/athlete';
import {Person} from '../model/person';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private GET_PEROSN = 'http://localhost:8080/person/find/';

  constructor(private httpClient: HttpClient) {
  }

  public getPerson(id): Observable<Person> {
    const options =
      {params: new HttpParams().set('id', id)};
    return this.httpClient.get<Athlete>(this.GET_PEROSN, options);
  }
}
