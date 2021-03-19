import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  useLetters = false;
  useNumbers = false;
  useSymbols = false;
  password = '';

  onChangeUseLetters() {
    this.useLetters = !this.useLetters;
  }

  onChangeUseNumbers() {
    this.useNumbers = !this.useNumbers;
  }

  onChangeUseSymbols() {
    this.useSymbols = !this.useSymbols;
  }

  onButtonClick() {
    this.password = 'testpassword';
    const { useLetters, useNumbers, useSymbols } = this;
    console.table({ useLetters, useNumbers, useSymbols });
  }
}
