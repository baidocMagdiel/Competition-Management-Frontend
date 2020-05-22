import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClubRoutingModule } from './club-routing.module';
import { ClubComponent } from './component/club.component';
import {MaterialModule} from '../../material-module';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [ClubComponent],
    imports: [
        CommonModule,
        ClubRoutingModule,
        MaterialModule,
        FormsModule
    ]
})
export class ClubModule { }
