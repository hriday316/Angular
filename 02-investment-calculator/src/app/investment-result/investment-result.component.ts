import { Component  } from '@angular/core';
import { UserInputComponent } from "../user-input/user-input.component";
import { calculateInvestmentResults } from '../../investment-results';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-result',
  standalone: true,
  imports: [UserInputComponent, CurrencyPipe],
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css'
})
export class InvestmentResultComponent {
 inputsData = {
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    investmentDuration: 0
  }
  annualInvestmentData: any[] = [];
  onUserInputs(event: {initialInvestment: number, annualInvestment: number, expectedReturn: number, investmentDuration: number}) {
    this.inputsData.initialInvestment = event.initialInvestment;
    this.inputsData.annualInvestment = event.annualInvestment;
    this.inputsData.expectedReturn = event.expectedReturn;
    this.inputsData.investmentDuration = event.investmentDuration;

    this.annualInvestmentData = calculateInvestmentResults(this.inputsData);
    console.log("annual investment data", this.annualInvestmentData);
     
  }




    
}
