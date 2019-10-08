import { Component, OnInit } from '@angular/core';
import { DashboardDataService } from '../../../../service/dashboard-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {

  donutData: Array<number>= [];
  donutLabels: Array<string>= []; 
  barChartData: Array<any> =[];
  scatterChartData: Array<any> =[];
  lineChartData: Array<any> =[];
  lineChartLabels: Array<string>= []; 


  constructor(private dashboardDataService: DashboardDataService) { }

  ngOnInit() {
    this.donutData = this.dashboardDataService.getShares();
    this.donutLabels = this.dashboardDataService.getMarkets();
    this.barChartData = [
        { data: this.donutData, label: 'Series A' },
    ];
    this.scatterChartData = [
        {
          data: [
            { x: 1, y: 1 },
            { x: 2, y: 3 },
            { x: 3, y: -2 },
            { x: 4, y: 4 },
            { x: 5, y: -3, r: 10 },
          ],
          label: 'Series A',
          pointRadius: 5,
        },
    ];
  
    this.lineChartLabels = this.dashboardDataService.getMonths();
    
    this.lineChartData = [
      { data: this.dashboardDataService.getMarketData().africa, label: 'Africa' },
      { data: this.dashboardDataService.getMarketData().asia, label: 'Asia' },
      { data: this.dashboardDataService.getMarketData().europe, label: 'Europe' },
      { data: this.dashboardDataService.getMarketData().usa, label: 'USA' },
  ];
  }

}
