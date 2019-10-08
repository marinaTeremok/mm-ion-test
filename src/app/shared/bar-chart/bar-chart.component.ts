import { Component, OnInit, Input } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';


@Component({
  selector: 'bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.less']
})
export class BarChartComponent implements OnInit {
  @Input() barChartLabels: Label[];
  @Input() barChartData: ChartDataSets[];

  barChartOptions: ChartOptions = {
    responsive: true,
  };
 
  barChartType: ChartType = 'bar';
  barChartLegend = false;
  barChartPlugins = [];

  constructor() {}

  ngOnInit() {
  }

}
