import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentInput } from '../investment-results.model';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  // @Output() calculate = new EventEmitter<InvestmentInput>();

  enteredInitialInvestment = '0';
  enteredAnnualInvestment = '0';
  enteredExpectedReturn = '10';
  enteredDuration = '5';
  constructor(private investmentService: InvestmentService) {};


  onSubmit(){
    // <------------------------Code Before Using Service------------------->
    // this.calculate.emit({
    //   initialInvestment: +this.enteredInitialInvestment,
    //   annualInvestment: +this.enteredAnnualInvestment,
    //   expectedReturn: + this.enteredExpectedReturn,
    //   duration: +this.enteredDuration
    // });
    this.investmentService.calculateInvestmentResults({
      initialInvestment: +this.enteredInitialInvestment,
      annualInvestment: +this.enteredAnnualInvestment,
      expectedReturn: + this.enteredExpectedReturn,
      duration: +this.enteredDuration
    })
  }
}
