import { Component, OnInit } from '@angular/core';
import { FizzBuzzService } from '../../../../service/fizz-buzz.service';

//import { Observable, fromEvent, Subject } from 'rxjs';
//import { takeUntil, concatMap, map, tap, mapTo, delay, switchMap  } from 'rxjs/operators';

@Component({
  selector: 'app-fizzbuzz',
  templateUrl: './fizzbuzz.component.html',
  styleUrls: ['./fizzbuzz.component.less']
})
export class FizzbuzzComponent implements OnInit {
  results: Array<string>=[];

  // startButton = document.getElementById('startFizzBuzz');
  // stopButton = document.getElementById('stopFizzBuzz');

  // startfizzbuzz$=new Observable<void | Event>();
  // stopfizzbuzz$=new Observable<void>();
  // myNotifications$ = new Observable<any>();
  
  constructor(private fizzBuzzService: FizzBuzzService) {
    // this.stopfizzbuzz$ = fromEvent(this.stopButton, 'click').pipe(()=>this.clearResults());

    // this.startfizzbuzz$ = fromEvent(this.startButton, 'click').pipe(
    //   tap(()=>console.log("start")),
    //   takeUntil(this.stopfizzbuzz$)
    // ).pipe(delay(10));

    // // this.myNotifications$ = this.startfizzbuzz$.pipe(
    // //   switchMap(()=>new Promise(this.runFizzBuzz))
    // // );
    // this.startfizzbuzz$.subscribe({
    //   next: () => console.log("start"),
    //   complete:() => this.runFizzBuzz()});

  }

  runFizzBuzz(): void{
    for(let i=1; i<101; i++){
      this.results.push(this.fizzBuzzService.getFizzBuzz(i));
    }
  }

  clearResults(): any{
    this.results=[];
  }

  onStartFizzBuzz($event: any){
    this.runFizzBuzz();
  }

  onStopFizzBuzz($event: any){
    this.onStartFizzBuzz(null);
    this.clearResults();
  }

  ngOnInit() {
    
  }

}
