import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  passwordLength = 0;
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
    const allowedCharacters: string[] = [];

    if (this.useLetters) {
      // Add alphabetical characters to allowed characters
      const letters = 'abcdefghijklmnopqrstuvwxyz';
      for (const letter of letters) {
        allowedCharacters.push(letter);
      }
    }

    if (this.useNumbers) {
      // Add numerical characters to allowed characters
      const numbers = '0123456789';
      for (const number of numbers) {
        allowedCharacters.push(number);
      }
    }

    if (this.useSymbols) {
      // Add symbols to allowed characters
      const symbols = '!@#$%^&*()-_=+[{]}|`~;:\'",<.>/?';
      for (const symbol of symbols) {
        allowedCharacters.push(symbol);
      }
    }

    // Generate random password
    const generatedPassword: string[] = [];
    for (let i = 0; i < this.passwordLength; ++i) {
      const randomIndex = Math.floor(Math.random() * allowedCharacters.length);
      generatedPassword.push(allowedCharacters[randomIndex]);
    }

    this.password = generatedPassword.join('');

    // // Logging purposes
    // const { passwordLength, useLetters, useNumbers, useSymbols } = this;
    // console.table({ passwordLength, useLetters, useNumbers, useSymbols });
  }
}
