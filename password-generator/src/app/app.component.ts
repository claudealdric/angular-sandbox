import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  passwordLength = 12
  useLowercaseLetters = true
  useUppercaseLetters = true
  useNumbers = true
  useSymbols = false
  password = ''

  buttonIsDisabled() {
    const {
      passwordLength,
      useLowercaseLetters,
      useUppercaseLetters,
      useNumbers,
      useSymbols,
    } = this
    return !(
      passwordLength > 0 &&
      Number.isInteger(passwordLength) &&
      (useLowercaseLetters || useUppercaseLetters || useNumbers || useSymbols)
    )
  }

  onChangeUseLowercaseLetters() {
    this.useLowercaseLetters = !this.useLowercaseLetters
  }

  onChangeUseUppercaseLetters() {
    this.useUppercaseLetters = !this.useUppercaseLetters
  }

  onChangeUseNumbers() {
    this.useNumbers = !this.useNumbers
  }

  onChangeUseSymbols() {
    this.useSymbols = !this.useSymbols
  }

  onButtonClick() {
    const allowedCharacters: string[] = []

    {
      const letters = 'abcdefghijklmnopqrstuvwxyz'

      if (this.useLowercaseLetters) {
        // Add lowercase alphabetical characters to allowed characters
        for (const letter of letters) {
          allowedCharacters.push(letter)
        }
      }

      if (this.useUppercaseLetters) {
        // Add uppercase alphabetical characters to allowed characters
        for (const letter of letters.toUpperCase()) {
          allowedCharacters.push(letter)
        }
      }
    }

    if (this.useNumbers) {
      // Add numerical characters to allowed characters
      const numbers = '0123456789'
      for (const number of numbers) {
        allowedCharacters.push(number)
      }
    }

    if (this.useSymbols) {
      // Add symbols to allowed characters
      const symbols = '!@#$%^&*()-_=+[{]}|`~;:\'",<.>/?'
      for (const symbol of symbols) {
        allowedCharacters.push(symbol)
      }
    }

    // Generate random password
    const generatedPassword: string[] = []
    for (let i = 0; i < this.passwordLength; ++i) {
      const randomIndex = Math.floor(Math.random() * allowedCharacters.length)
      generatedPassword.push(allowedCharacters[randomIndex])
    }

    this.password = generatedPassword.join('')
  }
}
