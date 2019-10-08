import { TestBed } from '@angular/core/testing';

import { FactorialService } from './factorial.service';

describe('FactorialService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FactorialService = TestBed.get(FactorialService);
    expect(service).toBeTruthy();
  });

  it('should calculate factorial', () => {
    const service: FactorialService = TestBed.get(FactorialService);
    expect(service.calculateFactorial(0)).toEqual(1);
    expect(service.calculateFactorial(1)).toEqual(1);
    expect(service.calculateFactorial(-7)).toEqual(-1);
    expect(service.calculateFactorial(5)).toEqual(120);
  });
});
