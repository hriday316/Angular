import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  @Output() userInputs = new EventEmitter <{initialInvestment: number, annualInvestment: number, expectedReturn: number, investmentDuration: number}>();
 initialInvestment=  signal(0);
  annualInvestment= signal(0);
  expectedReturn= signal(0);
  investmentDuration= signal(0);

  onSubmit() {
    this.userInputs.emit({
      initialInvestment: +this.initialInvestment(),
      annualInvestment: +this.annualInvestment(),
      expectedReturn: +this.expectedReturn(),
      investmentDuration: +this.investmentDuration()
    });
  }
}
