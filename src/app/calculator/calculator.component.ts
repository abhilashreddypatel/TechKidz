import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent implements OnInit {
  constructor() {}

  final: string = '0';

  ngOnInit() {
    console.log(this.final + '  ');
  }

  getsymbol() {}

  appendToDisplay(value: any) {
    console.log(this.final + '  ' + value);
    // this.final += parseInt(value, 10);
    this.final += value;
  }

  clearDisplay() {
    this.final = '';
  }

  calculateResult() {
    try {
      // Use eval carefully; consider alternatives for production
      this.final = eval(this.final).toString();
    } catch (error) {
      this.final = 'Error';
    }
  }
}
