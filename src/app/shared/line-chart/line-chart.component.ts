import { Component, OnInit, Input } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.less']
})
export class LineChartComponent implements OnInit {

  @Input() lineChartData: ChartDataSets[];
  @Input() lineChartLabels: Label[]

  lineChartOptions: ChartOptions = {
    responsive: true,
  };
  lineChartColors: Color[] = [
    {
      borderColor: 'none',
      backgroundColor: 'rgba(255,0,0,0.3)',
      borderWidth: 0,
    },
  ];
  lineChartLegend = true;
  lineChartType = 'line';
  lineChartPlugins = [];


  constructor() { }

  ngOnInit() {
  }

}
