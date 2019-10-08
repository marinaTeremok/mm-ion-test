import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FactorialService {

  constructor() { }

  f: Array<number>=[];

  calculateFactorial(input: number) : number{
    if (input < 0) 
      return -1;
      
    if(input == 0 || input==1)
      return 1;

    if (this.f[input] > 0)
      this.f[input];

    return this.f[input] = this.calculateFactorial(input-1) * input;  
  }
}
