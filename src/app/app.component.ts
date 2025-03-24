import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'complaince-mait';
  isPanelCollapsed = false;
  isMobileMenuOpen = false;
  isMobileView = false;
  isLoggedIn = false;
  userEmail: string | null = null;

  constructor(private router: Router, private authService: AuthService) {
    this.checkScreenSize();
    
    // Subscribe to auth state changes
    this.authService.isLoggedIn$.subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
      this.userEmail = isLoggedIn ? this.authService.getUserEmail() : null;
    });
  }

  ngOnInit() {
    // Subscribe to router events to scroll to top on navigation
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      // Scroll to top with smooth behavior
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isMobileView = window.innerWidth <= 768;
    if (!this.isMobileView) {
      this.isMobileMenuOpen = false;
    }
  }

  togglePanel() {
    this.isPanelCollapsed = !this.isPanelCollapsed;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    // Prevent scrolling when menu is open
    document.body.style.overflow = this.isMobileMenuOpen ? 'hidden' : '';
  }

  onMobileMenuItemClick() {
    if (this.isMobileView) {
      this.isMobileMenuOpen = false;
      document.body.style.overflow = '';
    }
  }
  
  logout() {
    this.authService.logout();
  }
}
