import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './component/menu.component';
import {MaterialModule} from '../../material-module';


@NgModule({
  declarations: [MenuComponent],
  exports: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    MaterialModule
  ]
})
export class MenuModule { }
