import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

interface Connection {
  id: number;
  company: string;
  type: string;
  allowViewLCRs: boolean;
  status: 'connected' | 'pending';
}

@Component({
  selector: 'app-connections',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './connections.component.html',
  styleUrls: ['./connections.component.css']
})
export class ConnectionsComponent implements OnInit {
  connections: Connection[] = [];
  filteredConnections: Connection[] = [];
  searchTerm: string = '';

  ngOnInit(): void {
    // Sample connection data
    this.connections = [
      {
        id: 1,
        company: 'Apex Infrastructure',
        type: 'Hiring Firm',
        allowViewLCRs: true,
        status: 'connected'
      },
      {
        id: 2,
        company: 'Alby\'s Sparkys',
        type: 'Prime Contractor',
        allowViewLCRs: true,
        status: 'connected'
      },
      {
        id: 3,
        company: 'Barry\'s Electrical',
        type: 'Prime Contractor',
        allowViewLCRs: false,
        status: 'pending'
      }
    ];
    
    this.filteredConnections = [...this.connections];
  }

  // This method is automatically called when searchTerm changes due to ngModel binding
  ngDoCheck(): void {
    this.filterConnections();
  }

  // Method to filter connections based on search term
  filterConnections(): void {
    if (!this.searchTerm) {
      this.filteredConnections = [...this.connections];
      return;
    }
    
    const term = this.searchTerm.toLowerCase();
    this.filteredConnections = this.connections.filter(connection => 
      connection.company.toLowerCase().includes(term) || 
      connection.type.toLowerCase().includes(term)
    );
  }
}