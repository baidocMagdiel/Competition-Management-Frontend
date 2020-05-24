import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivateChild} from '@angular/router';
import { Observable } from 'rxjs';
import {PersonTypeEnum} from '../../shared/PersonTypeEnum';
import {SessionService} from '../../session.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationGuard implements CanActivateChild {
  constructor(private sessionService: SessionService) {
  }

  canActivateChild( nextRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
    const pagePersonRole: PersonTypeEnum = nextRoute.data.role;
    return this.sessionService.currentLoggedPerson.type === pagePersonRole;
  }
}
