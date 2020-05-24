import { Injectable } from '@angular/core';
import {Competition} from '../../home/model/competition';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompetitionManagementService {

  constructor(private http: HttpClient) {
  }

  createCompetition(competition: Competition){
    return this.http.post<Competition>('http://localhost:8080/competition/create/', competition);
  }

  appendNewComponent(competitions: Competition[], competition){
    let copyCompetitions = JSON.parse(JSON.stringify(competitions));
    copyCompetitions = copyCompetitions.concat([competition]);
    return copyCompetitions;
  }
}
