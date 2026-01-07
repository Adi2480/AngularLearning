import { CurrencyPipe } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-result',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css'
})
export class InvestmentResultComponent {
  // <------Code before using service---------------->
  // @Input() results?: {
  //   year: number,
  //   interest: number,
  //   valueEndOfYear: number,
  //   annualInvestment: number,
  //   totalInterest: number,
  //   totalAmountInvested: number,
  // }[];
  private investmentService = inject(InvestmentService);

  get results(){
    return this.investmentService.inputResult;
  }
}
