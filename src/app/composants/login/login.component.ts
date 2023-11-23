import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  login(username: string, password: string) {
    const isValid = this.authService.login(username, password);

    if (!isValid) {
      alert('Login or password incorrect');
      // Redirect back to the login page
      this.router.navigate(['/login']);
    } else {
      // If credentials are valid, check user role and navigate accordingly
      if (this.authService.isAdmin()) {
        this.router.navigate(['/backEnd/activitesBack']);
      } else if (this.authService.isUser()) {
        this.router.navigate(['/front']);
      }
    }
  }
}
