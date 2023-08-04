import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  password = '';
  passwordLength = 0;
  hasLetters = false;
  hasNumbers = false;
  hasSymbols = false;

  onGeneratePassword() {
    let letters = 'abcdefghijklmnopqrstuvwxyz';
    let numbers = '1234567890';
    let symbols = '!@#$%^&*()_-+=';
    let passCharacters = '';

    if (this.hasLetters) {
      passCharacters += letters;
    }

    if (this.hasNumbers) {
      passCharacters += numbers;
    }

    if (this.hasSymbols) {
      passCharacters += symbols;
    }

    this.password = '';
    for (let i = 0; i < this.passwordLength; i++) {
      let noGenerated = Math.ceil((passCharacters.length - 1) * Math.random());
      let charChosen = passCharacters[noGenerated];
      this.password += charChosen;
    }
  }

  isGenerateDisabled() {
    return (
      !this.passwordLength &&
      !(this.hasLetters || this.hasNumbers || this.hasSymbols)
    );
  }

  onPasswordLengthInputChanged(event: Event) {
    let passValue = (event.target as HTMLInputElement).value;
    let parsedInput = parseInt(passValue);

    if (!isNaN(parsedInput)) {
      this.passwordLength = parsedInput;
    }
  }

  onChangeHasLetters() {
    this.hasLetters = !this.hasLetters;
  }

  onChangeHasNumbers() {
    this.hasNumbers = !this.hasNumbers;
  }

  onChangeHasSymbols() {
    this.hasSymbols = !this.hasSymbols;
  }
}
