import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  isLoading: boolean = false;

  constructor(private router: Router, private authService: AuthService) {
    // If user is already logged in, redirect to home
    this.authService.isLoggedIn$.subscribe(isLoggedIn => {
      if (isLoggedIn) {
        this.router.navigate(['/notifications']);
      }
    });
  }

  login(): void {
    this.errorMessage = '';
    this.isLoading = true;

    // Basic validation
    if (!this.email || !this.password) {
      this.errorMessage = 'Please enter both email and password';
      this.isLoading = false;
      return;
    }

    this.authService.login(this.email, this.password)
      .then(() => {
        // Navigate to the main page
        this.router.navigate(['/notifications']);
      })
      .catch(error => {
        this.errorMessage = error || 'Invalid email or password';
      })
      .finally(() => {
        this.isLoading = false;
      });
  }

  forgotPassword(): void {
    // In a real application, this would trigger a password reset flow
    alert('Password reset functionality would be implemented here.');
  }
}
