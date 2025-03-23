import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

interface Certificate {
  id: string;
  title: string;
  lcrId: string;
  expiryDate: string;
  issuingAuthority: string;
  jurisdiction: string;
  connections?: number;
  hasImage?: boolean;
}

@Component({
  selector: 'app-view-certificate',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './view-certificate.component.html',
  styleUrls: ['./view-certificate.component.css']
})
export class ViewCertificateComponent implements OnInit {
  certificate: Certificate | undefined;
  certificateId: string = '';
  
  // Sample certificates data
  certificates: Certificate[] = [
    {
      id: '1',
      title: 'Victorian Drivers License',
      lcrId: '5897566',
      expiryDate: '20/03/2025',
      issuingAuthority: 'VicRoads',
      jurisdiction: 'Australia / Victoria',
      connections: 3,
      hasImage: true
    },
    {
      id: '2',
      title: 'Class A Electrical Cert',
      lcrId: '7654321',
      expiryDate: '15/06/2026',
      issuingAuthority: 'Electrical Safety Office',
      jurisdiction: 'Australia / Queensland',
      connections: 1,
      hasImage: false
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.certificateId = params['id'];
      this.loadCertificate();
    });
  }

  loadCertificate(): void {
    // In a real app, this would be a service call
    this.certificate = this.certificates.find(cert => cert.id === this.certificateId);
    
    if (!this.certificate) {
      // Certificate not found, redirect to certificates list
      this.router.navigate(['/certificates']);
    }
  }

  viewConnections(): void {
    // Navigate to connections view
    console.log('View connections clicked');
    // this.router.navigate(['/certificates', this.certificateId, 'connections']);
  }

  viewImage(): void {
    // Navigate to image view
    console.log('View image clicked');
    // this.router.navigate(['/certificates', this.certificateId, 'image']);
  }

  deleteCertificate(): void {
    if (confirm('Are you sure you want to delete this certificate?')) {
      console.log('Delete certificate clicked');
      this.router.navigate(['/certificates']);
    }
  }
}
