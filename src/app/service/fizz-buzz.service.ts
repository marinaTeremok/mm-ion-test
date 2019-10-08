import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FizzBuzzService {

  constructor() { }

  getFizzBuzz(input: number): string {
    return (input%3==0 && input%5==0)?"FizzBuzz":(input%5==0)?"Buzz":(input%3==0)?"Fizz":input.toString();
  } 
}
