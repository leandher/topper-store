import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPainelComponent } from './dashboard-painel/dashboard-painel.component';
import { ChartsModule } from 'ng2-charts';
import { DashboardService } from './dashboard.service';
import * as moment from 'moment';

@NgModule({
  imports: [
    SharedModule,
    ChartsModule,
    CommonModule
  ],
  declarations: [
    DashboardPainelComponent
  ],
  providers: [ DashboardService ]
})
export class DashboardModule { }
