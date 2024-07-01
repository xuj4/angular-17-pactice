import { Component, computed, inject, input } from '@angular/core';
import { AnnualData } from '../investment-input.model';
import { CurrencyPipe } from '@angular/common';
import { InvestmentService } from '../service/calculator.service';

@Component({
  selector: 'app-investment-result',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css'
})
export class InvestmentResultComponent {

  investmentService = inject(InvestmentService);

  results = this.investmentService.resultData;
  
}
