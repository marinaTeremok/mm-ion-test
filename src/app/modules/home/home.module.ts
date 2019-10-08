import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home.routing.module';
import { DashboardComponent, FizzbuzzComponent, FactorialComponent } from './pages';

import { ChartsModule } from 'ng2-charts';
import { DonutComponent } from '../../shared/donut/donut.component';
import { BarChartComponent } from '../../shared/bar-chart/bar-chart.component';
import { ScatterPlotComponent } from '../../shared/scatter-plot/scatter-plot.component';
import { LineChartComponent } from '../../shared/line-chart/line-chart.component';
 
@NgModule({
  declarations: [DashboardComponent,FizzbuzzComponent, FactorialComponent, 
    DonutComponent, BarChartComponent, LineChartComponent, ScatterPlotComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ChartsModule
  ],
  providers: [],
})
export class HomeModule { }