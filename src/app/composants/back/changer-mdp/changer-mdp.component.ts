// changer-mdp.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-changer-mdp',
  templateUrl: './changer-mdp.component.html',
  styleUrls: ['./changer-mdp.component.css'],
})
export class ChangerMdpComponent {
  username: string = '';
  newPassword: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  changePassword() {
    if (this.username && this.newPassword) {
      this.authService.changePassword(this.username, this.newPassword).subscribe(
        (response) => {
          alert('Password changed successfully');
          // Optionally, you can reset the form or navigate to another page here
          this.username = '';
          this.newPassword = '';
        },
        (error) => {
          console.error('Password change failed:', error);
          alert('Password change failed. Please try again.');
        }
      );
    } else {
      alert('Please enter a username and a new password.');
    }
  }
 
  retour(){
    this.router.navigate(["/../login"])
    }
}
