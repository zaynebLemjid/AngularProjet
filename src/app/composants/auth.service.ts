import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3001';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<boolean> {
    return this.http.get<any[]>(`${this.apiUrl}/login?username=${username}&password=${password}`)
      .pipe(map(users => users.length > 0));
  }

  isAdmin(): boolean {
    return false; 
  }

  isUser(): boolean {
    return true; 
  }

  signUp(username: string, password: string): Observable<boolean> {
    const newUser = { id: Date.now(), username, password };
    return this.http.post<any>(`${this.apiUrl}/login`, newUser)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    if (error.status === 409) {
      // Username conflict error
      return throwError('Username already exists');
    }

    console.error('An error occurred:', error);
    return throwError('An error occurred. Please try again.');
  }

  // auth.service.ts
changePassword(username: string, newPassword: string): Observable<any> {
  return this.http.put<any>(`${this.apiUrl}/login/${username}`, { password: newPassword })
    .pipe(
      catchError(error => {
        console.error('Error changing password:', error);
        return throwError('Password change failed. Please try again.');
      })
    );
}

}