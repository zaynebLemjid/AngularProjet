import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {}

  login(username: string, password: string) {
    this.authService.login(username, password).subscribe((isValid: boolean) => {
      if (!isValid) {
        alert('Login or password incorrect');
        // Redirect back to the login page
        this.router.navigate(['/login']);
      } else {
        // If credentials are valid, check user role and navigate accordingly
        if (username === 'admin') {
          this.router.navigate(['/backEnd/activitesBack']);
        } else {
          this.router.navigate(['/front']);
        }
      }
    });
  }

  
  
  navigateToSignUp() {
    this.router.navigate(['/sign-up']);
  }

  retour(){
    this.router.navigate(['/departement'])
  }

  changermdp(){
    this.router.navigate(['/../changer-mdp'])
  }
}
