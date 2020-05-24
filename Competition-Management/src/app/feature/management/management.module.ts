import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ManagementRoutingModule} from './management-routing.module';
import {ManagementComponent} from './component/management.component';
import {MaterialModule} from '../../material-module';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [ManagementComponent],
  imports: [
    CommonModule,
    ManagementRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class ManagementModule {
}
