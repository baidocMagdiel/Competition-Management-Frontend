import { Injectable } from '@angular/core';
import {Person} from './feature/profile/model/person';
import {HttpClient} from '@angular/common/http';
import {AthleteMock} from './feature/club/mock/athlete.mock';
import {PersonTypeEnum} from './shared/PersonTypeEnum';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  currentLoggedPerson: Person = AthleteMock[4];
  constructor() { }

  updateCurrentLoggedPerson(person: Person){
    this.currentLoggedPerson = person;
  }

  removeCurrentUser(){
    this.currentLoggedPerson = undefined;
  }

  isManager(){
    return this.currentLoggedPerson &&  this.currentLoggedPerson.type === PersonTypeEnum.MANAGER;
  }

  isCoach(){
    return this.currentLoggedPerson && this.currentLoggedPerson.type === PersonTypeEnum.COACH;
  }
}
