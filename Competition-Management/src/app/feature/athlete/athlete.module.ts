import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AthleteRoutingModule } from './athlete-routing.module';
import { AthleteComponent } from './component/athlete.component';
import {MaterialModule} from '../../material-module';


@NgModule({
  declarations: [AthleteComponent],
  imports: [
    CommonModule,
    AthleteRoutingModule,
    MaterialModule
  ]
})
export class AthleteModule { }
