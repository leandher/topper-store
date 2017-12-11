import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPainelComponent } from './dashboard-painel/dashboard-painel.component';
import { ChartsModule } from 'ng2-charts';
import * as moment from 'moment';

@NgModule({
  imports: [
    SharedModule,
    ChartsModule,
    CommonModule
  ],
  declarations: [
    DashboardPainelComponent
  ]
})
export class DashboardModule { }
