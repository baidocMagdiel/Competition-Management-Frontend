import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ManagementRoutingModule} from './management-routing.module';
import {ManagementComponent} from './component/management.component';
import {MaterialModule} from '../../material-module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AddCompetitionDialogComponent } from './component/add-competition-dialog.component';


@NgModule({
  declarations: [ManagementComponent, AddCompetitionDialogComponent],
  imports: [
    CommonModule,
    ManagementRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ManagementModule {
}
