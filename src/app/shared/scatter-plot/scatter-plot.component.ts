import { Component, OnInit, Input } from '@angular/core';
import { ChartDataSets, ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'scatter-plot',
  templateUrl: './scatter-plot.component.html',
  styleUrls: ['./scatter-plot.component.less']
})
export class ScatterPlotComponent implements OnInit {
  @Input() scatterChartData: ChartDataSets[];

  // scatter
  scatterChartOptions: ChartOptions = {
    responsive: true,
  };

  scatterChartType: ChartType = 'scatter';
  scatterChartLegend = false;

  constructor() { }

  ngOnInit() {
  }

}
