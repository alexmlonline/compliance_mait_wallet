import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Certificate {
  id: string;
  title: string;
  actions: string[];
}

@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent {
  certificates: Certificate[] = [
    {
      id: '1',
      title: 'Victorian Drivers License',
      actions: ['LCR Expiring']
    },
    {
      id: '2',
      title: 'Class A Electrical Cert',
      actions: ['A Connection has requested a copy']
    }
  ];
}