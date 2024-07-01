import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentInput } from '../investment-input.model';
import { InvestmentService } from '../service/calculator.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  constructor(private investmentService: InvestmentService) {
  }

  calculator = output<InvestmentInput>(); 
  initialInvestment = signal('1');
  annualInvestment = signal('20');
  expectedReturn = signal('10');
  durationInvestment = signal('5');

  onFormSubmit() {
    console.log(this.investmentService.calculateInvestmentResults({
        initialInvestment: +this.initialInvestment(),
        annualInvestment: +this.annualInvestment(),
        expectedReturn: + this.expectedReturn(),
        duration: +this.durationInvestment()
    }));
    // this.calculator.emit({
    //     initialInvestment: +this.initialInvestment(),
    //     annualInvestment: +this.annualInvestment(),
    //     expectedReturn: + this.expectedReturn(),
    //     duration: +this.durationInvestment()
    // });
  }
}
