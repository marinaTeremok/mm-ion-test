import { TestBed } from '@angular/core/testing';

import { DashboardDataService } from './dashboard-data.service';

describe('DashboardDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DashboardDataService = TestBed.get(DashboardDataService);
    expect(service).toBeTruthy();
  });

  it('should get data', () => {
    const service: DashboardDataService = TestBed.get(DashboardDataService);
    expect(service.getMarkets()).not.toBeNull();
    expect(service.getShares()).not.toBeNull();
    expect(service.getMonths()).not.toBeNull();
    expect(service.getMarketData()).not.toBeNull();
  });
});
