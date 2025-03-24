import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(this.hasStoredToken());
  public isLoggedIn$: Observable<boolean> = this.isLoggedInSubject.asObservable();

  constructor(private router: Router) {
    // Check login status when service initializes
    this.isLoggedInSubject.next(this.hasStoredToken());
  }

  login(email: string, password: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      // In a real app, you would make an API call here
      // For demo purposes, we'll simulate a successful login with any valid email and password
      setTimeout(() => {
        if (this.validateEmail(email) && password.length >= 0) {
          localStorage.setItem('isLoggedIn', 'true');
          localStorage.setItem('userEmail', email);
          this.isLoggedInSubject.next(true);
          resolve(true);
        } else {
          reject('Invalid email or password');
        }
      }, 1000);
    });
  }

  logout(): void {
    // Clear stored tokens
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    this.isLoggedInSubject.next(false);
    
    // Navigate to login page
    this.router.navigate(['/login']);
  }

  getUserEmail(): string | null {
    return localStorage.getItem('userEmail');
  }

  private hasStoredToken(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }

  private validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}
