import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-back',
  templateUrl: './menu-back.component.html',
  styleUrls: ['./menu-back.component.css']
})
export class MenuBackComponent {
  constructor(private router:Router){}
  logOut(){
    this.router.navigate(['/login']);
  }
}
