import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

interface Notification {
  id: number;
  type: string;
  summary: string;
  link: string;
}

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  notifications: Notification[] = [];
  filteredNotifications: Notification[] = [];
  searchTerm: string = '';

  ngOnInit(): void {
    // Sample notification data
    this.notifications = [
      {
        id: 1,
        type: 'New Connection Request',
        summary: 'Barry\'s Electrical wants to connect',
        link: '/invites'
      },
      {
        id: 2,
        type: 'Expiring LCR',
        summary: 'Your Victorian Drivers License expires soon',
        link: '/certificates'
      }
    ];
    
    this.filteredNotifications = [...this.notifications];
  }

  // This method is automatically called when searchTerm changes due to ngModel binding
  ngDoCheck(): void {
    this.filterNotifications();
  }

  // Method to filter notifications based on search term
  filterNotifications(): void {
    if (!this.searchTerm) {
      this.filteredNotifications = [...this.notifications];
      return;
    }
    
    const term = this.searchTerm.toLowerCase();
    this.filteredNotifications = this.notifications.filter(notification => 
      notification.type.toLowerCase().includes(term) || 
      notification.summary.toLowerCase().includes(term)
    );
  }
}
