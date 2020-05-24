import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompetitionRoutingModule } from './competition-routing.module';
import { CompetitionComponent } from './component/competition.component';
import {MaterialModule} from '../../material-module';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [CompetitionComponent],
  imports: [
    CommonModule,
    CompetitionRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class CompetitionModule { }
