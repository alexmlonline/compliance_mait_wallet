import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface ConnectionDetail {
  id: number;
  company: string;
  type: string;
  allowViewLCRs: boolean;
  autoSubmitThreshold: number;
  status: 'connected' | 'pending';
}

@Component({
  selector: 'app-view-connection',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './view-connection.component.html',
  styleUrls: ['./view-connection.component.css']
})
export class ViewConnectionComponent implements OnInit {
  connectionId: number = 0;
  connection: ConnectionDetail | null = null;
  allowViewLCRs: boolean = false;
  autoSubmitThreshold: number = 80;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.connectionId = +params['id'];
      this.loadConnectionDetails();
    });
  }

  loadConnectionDetails(): void {
    // In a real application, this would fetch data from a service
    // For now, we'll use mock data based on the connection ID
    if (this.connectionId === 1) {
      // Apex Infrastructure
      this.connection = {
        id: 1,
        company: 'Apex Infrastructure',
        type: 'Hiring Firm',
        allowViewLCRs: true,
        autoSubmitThreshold: 75,
        status: 'connected'
      };
    } else if (this.connectionId === 2) {
      // Alby's Sparkys
      this.connection = {
        id: 2,
        company: 'Alby\'s Sparkys',
        type: 'Prime Contractor',
        allowViewLCRs: true,
        autoSubmitThreshold: 85,
        status: 'connected'
      };
    } else if (this.connectionId === 3) {
      // Barry's Electrical
      this.connection = {
        id: 3,
        company: 'Barry\'s Electrical',
        type: 'Prime Contractor',
        allowViewLCRs: true,
        autoSubmitThreshold: 80,
        status: 'pending'
      };
    } else {
      // Handle invalid connection ID
      this.router.navigate(['/connections']);
    }

    if (this.connection) {
      this.allowViewLCRs = this.connection.allowViewLCRs;
      this.autoSubmitThreshold = this.connection.autoSubmitThreshold;
    }
  }

  toggleAllowViewLCRs(): void {
    if (this.connection) {
      this.connection.allowViewLCRs = !this.connection.allowViewLCRs;
      this.allowViewLCRs = this.connection.allowViewLCRs;
    }
  }

  connect(): void {
    if (this.connection) {
      this.connection.status = 'connected';
      // In a real application, this would call a service to update the connection
      alert('Connection established');
      this.router.navigate(['/connections']);
    }
  }

  disconnect(): void {
    if (this.connection) {
      // In a real application, this would call a service to disconnect
      alert('Connection disconnected');
      this.router.navigate(['/connections']);
    }
  }
}
