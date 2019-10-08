import { Component, OnInit } from '@angular/core';
import { FactorialService } from '../../../../service/factorial.service';
import * as Utils from '../../../../core/util';


@Component({
  selector: 'app-factorial',
  templateUrl: './factorial.component.html',
  styleUrls: ['./factorial.component.less']
})
export class FactorialComponent implements OnInit {

  constructor(private factorialService: FactorialService) { }

  result : number = 0;
  isValidInput: boolean = true;

  onKey($event: any) {
      let n = $event.target.value;
      if(Utils.Util.isNumber(n)){
        this.isValidInput = true;
        this.result = this.factorialService.calculateFactorial(n);
      }
      else{
        this.isValidInput = false;
        this.result = 0;
      }
      
  }

  ngOnInit() {
    
  }

}
