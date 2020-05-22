import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Competition} from '../model/competition';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private GET_ALL_COMPETITIONS = 'localhost:8080/competition/getall';

  constructor(private httpClient: HttpClient) {
  }

  public getall(): Observable<Competition[]> {

    return this.httpClient.get<Competition[]>(this.GET_ALL_COMPETITIONS);
  }
}

