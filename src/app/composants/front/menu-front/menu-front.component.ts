import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-front',
  templateUrl: './menu-front.component.html',
  styleUrls: ['./menu-front.component.css']
})
export class MenuFrontComponent {
  constructor(private router:Router){}
  logOut(){
    this.router.navigate(['/']);
  }
}
