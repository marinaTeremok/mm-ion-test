import { TestBed } from '@angular/core/testing';

import { FizzBuzzService } from './fizz-buzz.service';

describe('FizzBuzzService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FizzBuzzService = TestBed.get(FizzBuzzService);
    expect(service).toBeTruthy();
  });

  it('should return fizz', () => {
    const service: FizzBuzzService = TestBed.get(FizzBuzzService);
    expect(service.getFizzBuzz(33)).toEqual('Fizz');
  });

  it('should return buzz', () => {
    const service: FizzBuzzService = TestBed.get(FizzBuzzService);
    expect(service.getFizzBuzz(55)).toEqual('Buzz');
  });

  it('should return fizz buzz', () => {
    const service: FizzBuzzService = TestBed.get(FizzBuzzService);
    expect(service.getFizzBuzz(15)).toEqual('FizzBuzz');
  });

  it('should return number', () => {
    const service: FizzBuzzService = TestBed.get(FizzBuzzService);
    expect(service.getFizzBuzz(4)).toEqual('4');
  });
});
