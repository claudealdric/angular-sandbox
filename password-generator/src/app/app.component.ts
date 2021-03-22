import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { isIntegerValidator } from 'src/shared/is-integer.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  passwordForm = new FormGroup({
    passwordLength: new FormControl(12, [
      Validators.required,
      Validators.min(1),
      Validators.max(128),
      isIntegerValidator(),
    ]),
    useLowercaseLetters: new FormControl(true),
    useUppercaseLetters: new FormControl(true),
    useNumbers: new FormControl(true),
    useSymbols: new FormControl(false),
  });

  password = '';

  onSubmit() {
    const {
      useLowercaseLetters,
      useUppercaseLetters,
      useNumbers,
      useSymbols,
      passwordLength,
    } = this.passwordForm.value;

    const allowedCharacters: string[] = [];

    {
      const letters = 'abcdefghijklmnopqrstuvwxyz';

      if (useLowercaseLetters) {
        // Add lowercase alphabetical characters to allowed characters
        for (const letter of letters) {
          allowedCharacters.push(letter);
        }
      }

      if (useUppercaseLetters) {
        // Add uppercase alphabetical characters to allowed characters
        for (const letter of letters.toUpperCase()) {
          allowedCharacters.push(letter);
        }
      }
    }

    if (useNumbers) {
      // Add numerical characters to allowed characters
      const numbers = '0123456789';
      for (const number of numbers) {
        allowedCharacters.push(number);
      }
    }

    if (useSymbols) {
      // Add symbols to allowed characters
      const symbols = '!@#$%^&*()-_=+[{]}|`~;:\'",<.>/?';
      for (const symbol of symbols) {
        allowedCharacters.push(symbol);
      }
    }

    // Generate random password
    const generatedPassword: string[] = [];
    for (let i = 0; i < passwordLength; ++i) {
      const randomIndex = Math.floor(Math.random() * allowedCharacters.length);
      generatedPassword.push(allowedCharacters[randomIndex]);
    }

    this.password = generatedPassword.join('');
  }
}
