import { Injectable } from '@angular/core';
import dataChart from '../mock/dataChart.json';


@Injectable({
  providedIn: 'root'
})
export class DashboardDataService {

  constructor() { }

  getMarkets(): Array<string>{
      return dataChart.markets;
  }

  getMonths(): Array<string>{
    return dataChart.months;
  }

  getShares(): Array<number>{
    return dataChart.shares;
  }

  getMarketData() :any{
    return dataChart.marketData;
  }
}
