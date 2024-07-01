import { Injectable, signal } from '@angular/core';
import { AnnualData, InvestmentInput } from '../investment-input.model';

@Injectable({ providedIn: 'root' })
export class InvestmentService {

    resultData = signal<AnnualData[]>([]);

    calculateInvestmentResults(data: InvestmentInput) {
  
    const { initialInvestment, duration, expectedReturn, annualInvestment } = data;
    let investmentValue = initialInvestment;

        const result: AnnualData[]= [];
        for (let i = 0; i < duration; i++) {

        const year = i + 1;
        const interestEarnedInYear = investmentValue * (expectedReturn / 100);
        investmentValue += interestEarnedInYear + annualInvestment;
        const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
    

        result.push({
            year: year,
            interest: interestEarnedInYear,
            valueEndOfYear: investmentValue,
            annualInvestment: annualInvestment,
            totalInterest: totalInterest,
            totalAmountInvested: initialInvestment + annualInvestment * year,
        });
    }

    //   console.log('calculation data', this.resultData)

        this.resultData.set(result);
    } 
 } 
