import { Component } from '@angular/core';

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.scss'],
})
export class PasswordStrengthComponent {
  password: string = '';
  passwordStrength: string = '';

  checkPasswordStrength() {
    const password = this.password;
    const hasLetters = /[a-zA-Z]/.test(password);
    const hasDigits = /\d/.test(password);
    const hasSymbols = /[!@#$%^&*(),.?":{}\-|<>_=+]/.test(password);

    if (password.length > 0 && password.length < 8) {
      this.passwordStrength = 'wrong';
    } else if (password.length == 0) {
      this.passwordStrength = 'weak';
    }else if (hasLetters && hasSymbols && hasDigits) {
      this.passwordStrength = 'strong';
    } else if ((hasLetters && hasDigits) || (hasLetters && hasSymbols) || (hasDigits && hasSymbols)) {
      this.passwordStrength = 'medium';
    } else if (hasLetters || hasDigits || hasSymbols) {
      this.passwordStrength = 'easy';
    } 
  }
}
