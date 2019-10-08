import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DonutComponent } from './donut/donut.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { ScatterPlotComponent } from './scatter-plot/scatter-plot.component';
import { LineChartComponent } from './line-chart/line-chart.component';



@NgModule({
  declarations: [DonutComponent, BarChartComponent, HeaderComponent, MenuComponent, ScatterPlotComponent, LineChartComponent],
  imports: [
    CommonModule, 
    FormsModule
  ],
  exports: [
    FormsModule
  ]
})
export class SharedModule { }
