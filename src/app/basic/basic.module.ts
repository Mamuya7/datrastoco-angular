import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicRoutingModule } from './basic-routing.module';
import { BasicComponent } from './basic.component';
import { TopnavComponent } from './components/layout/topnav/topnav.component';
import { SidenavComponent } from './components/layout/sidenav/sidenav.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [BasicComponent, TopnavComponent, SidenavComponent, HomeComponent],
  imports: [
    CommonModule,
    BasicRoutingModule
  ]
})
export class BasicModule { }
