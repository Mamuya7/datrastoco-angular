import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TopnavComponent } from './components/layout/topnav/topnav.component';
import { SidenavComponent } from './components/layout/sidenav/sidenav.component';


@NgModule({
  declarations: [AdminComponent, HomeComponent, DashboardComponent, TopnavComponent, SidenavComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
