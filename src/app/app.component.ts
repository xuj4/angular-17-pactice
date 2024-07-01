import { Component, signal} from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { AnnualData, InvestmentInput } from './investment-input.model';
import { InvestmentResultComponent } from './investment-result/investment-result.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports:[HeaderComponent, UserInputComponent, InvestmentResultComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {

  resultData = signal<AnnualData[]>([]);

  calculateInvestmentResults(data: InvestmentInput) {
  
  const { initialInvestment, duration, expectedReturn, annualInvestment } = data;
  let investmentValue = initialInvestment;

    const result = [];
    for (let i = 0; i < duration; i++) {

    const year = i + 1;
    const interestEarnedInYear = investmentValue * (expectedReturn / 100);
    investmentValue += interestEarnedInYear + annualInvestment;
    const totalInterest =
      investmentValue - annualInvestment * year - initialInvestment;
    
    console.log({
      year: year,
      interest: interestEarnedInYear,
      valueEndOfYear: investmentValue,
      annualInvestment: annualInvestment,
      totalInterest: totalInterest,
      totalAmountInvested: initialInvestment + annualInvestment * year,
    });


    result.push({
      year: year,
      interest: interestEarnedInYear,
      valueEndOfYear: investmentValue,
      annualInvestment: annualInvestment,
      totalInterest: totalInterest,
      totalAmountInvested: initialInvestment + annualInvestment * year,
    });
  }

  console.log('calculation data', this.resultData)

    this.resultData.set(result);
  }

}
