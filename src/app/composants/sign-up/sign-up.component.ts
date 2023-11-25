// sign-up.component.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  constructor(private authService: AuthService, private router: Router) {}

  signUp(username: string, password: string, confirmPassword: string) {
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    this.authService.signUp(username, password).subscribe(
      () => {
        // Navigate to login page after successful signup
        this.router.navigate(['/login']);
      },
      (error) => {
        console.error('Sign-Up failed:', error);
        alert(error); // Display the specific error message
      }
    );
  }

  retourLogin(){
    this.router.navigate(['/login']);
  }
}
