import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Competition} from '../../home/model/competition';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Category} from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {

  private GET_COMPETITION = 'http://localhost:8080/competition/find/';
  private GET_CATEGORIES = 'http://localhost:8080/competition/getcategories/';
  private GET_ALL_CATEGORIES = 'http://localhost:8080/category/getall/';
  private UPDATE_COMPETITION = 'http://localhost:8080/competition/update/';

  constructor(private httpClient: HttpClient) { }

  public getCompetition(competitionId): Observable<Competition> {
    const options =
      {params: new HttpParams().set('competitionId', competitionId)};
    return this.httpClient.get<Competition>(this.GET_COMPETITION, options);
  }

  public getCategories(competitionId): Observable<Category[]> {
    const options =
      {params: new HttpParams().set('competitionId', competitionId)};
    return this.httpClient.get<Competition[]>(this.GET_CATEGORIES, options);
  }

  public getAllCategory(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.GET_ALL_CATEGORIES);
  }

  public updateCompetition(competition: Competition): Observable<Competition>{
    return this.httpClient.post<Competition>(this.UPDATE_COMPETITION, competition);
  }
}
