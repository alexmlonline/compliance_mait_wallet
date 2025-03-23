import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

interface NotificationDetail {
  id: number;
  type: string;
  title: string;
  lcrId: string;
  expiryDate: string;
  issuingAuthority: string;
}

@Component({
  selector: 'app-view-notification',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './view-notification.component.html',
  styleUrls: ['./view-notification.component.css']
})
export class ViewNotificationComponent implements OnInit {
  notificationId: number = 0;
  notification: NotificationDetail | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.notificationId = +params['id'];
      this.loadNotificationDetails();
    });
  }

  loadNotificationDetails(): void {
    // In a real application, this would fetch data from a service
    // For now, we'll use mock data based on the notification ID
    if (this.notificationId === 1) {
      // New Connection Request notification
      this.notification = {
        id: 1,
        type: 'New Connection Request',
        title: 'Barry\'s Electrical',
        lcrId: '7823456',
        expiryDate: 'N/A',
        issuingAuthority: 'Electrical Contractors Association'
      };
    } else if (this.notificationId === 2) {
      // Expiring LCR notification
      this.notification = {
        id: 2,
        type: 'Expiring LCR',
        title: 'Victorian Drivers License',
        lcrId: '5897566',
        expiryDate: '20/03/2025',
        issuingAuthority: 'VicRoads'
      };
    } else {
      // Handle invalid notification ID
      this.router.navigate(['/notifications']);
    }
  }

  deleteNotification(): void {
    // In a real application, this would call a service to delete the notification
    alert('Notification deleted');
    this.router.navigate(['/notifications']);
  }
}
