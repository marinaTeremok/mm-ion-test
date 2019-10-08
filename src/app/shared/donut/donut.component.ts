import { Component, OnInit, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styleUrls: ['./donut.component.less']
})
export class DonutComponent implements OnInit {

  @Input() doughnutChartLabels: Label[];
  @Input() doughnutChartData: MultiDataSet[];

  // Doughnut
  doughnutChartType: ChartType = 'doughnut';

  constructor() { }

  ngOnInit() {

  }
}
