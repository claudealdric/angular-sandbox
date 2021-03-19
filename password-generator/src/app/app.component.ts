import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  passwordLength = 12;
  useLowercaseLetters = true;
  useUppercaseLetters = true;
  useNumbers = true;
  useSymbols = false;
  isButtonDisabled = false;
  password = '';

  onChangeUseLowercaseLetters() {
    this.useLowercaseLetters = !this.useLowercaseLetters;
    this.checkButtonDisable();
  }

  onChangeUseUppercaseLetters() {
    this.useUppercaseLetters = !this.useUppercaseLetters;
    this.checkButtonDisable();
  }

  onChangeUseNumbers() {
    this.useNumbers = !this.useNumbers;
    this.checkButtonDisable();
  }

  onChangeUseSymbols() {
    this.useSymbols = !this.useSymbols;
    this.checkButtonDisable();
  }

  checkButtonDisable() {
    const {
      passwordLength,
      useLowercaseLetters,
      useUppercaseLetters,
      useNumbers,
      useSymbols,
    } = this;
    const passwordHasLength = passwordLength > 0;
    const atLeastOneCheckboxIsChecked =
      useLowercaseLetters || useUppercaseLetters || useNumbers || useSymbols;

    this.isButtonDisabled = !(passwordHasLength && atLeastOneCheckboxIsChecked);
  }

  onButtonClick() {
    const allowedCharacters: string[] = [];

    {
      const letters = 'abcdefghijklmnopqrstuvwxyz';

      if (this.useLowercaseLetters) {
        // Add lowercase alphabetical characters to allowed characters
        for (const letter of letters) {
          allowedCharacters.push(letter);
        }
      }

      if (this.useUppercaseLetters) {
        // Add uppercase alphabetical characters to allowed characters
        for (const letter of letters.toUpperCase()) {
          allowedCharacters.push(letter);
        }
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
    // const {
    //   passwordLength,
    //   useLowercaseLetters,
    //   useNumbers,
    //   useSymbols,
    // } = this;
    // console.table({
    //   passwordLength,
    //   useLowercaseLetters,
    //   useNumbers,
    //   useSymbols,
    // });
  }
}
