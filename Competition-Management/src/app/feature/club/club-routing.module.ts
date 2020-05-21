import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClubComponent} from './component/club.component';

const routes: Routes = [{
  path: '', component: ClubComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClubRoutingModule { }
