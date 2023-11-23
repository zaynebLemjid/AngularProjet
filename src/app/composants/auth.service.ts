import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user = { username: 'user', pwd: 'pwdUser' };
  private admin = { username: 'admin', pwd: 'pwdAdmin' };

  constructor() {}

  public login(username: string, pwd: string): boolean {
    if (username === this.user.username && pwd === this.user.pwd) {
      localStorage.setItem('role', 'user');
      return true;
    }
    if (username === this.admin.username && pwd === this.admin.pwd) {
      localStorage.setItem('role', 'admin');
      return true;
    }
    return false;
  }

  public isUser(): boolean {
    return localStorage.getItem('role') == 'user';
  }

  public isAdmin(): boolean {
    return localStorage.getItem('role') == 'admin';
  }

  public logout(): void {
    localStorage.removeItem('role');
  }
}
