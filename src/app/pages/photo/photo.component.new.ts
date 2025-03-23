import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-photo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent {
  constructor(private router: Router) {}

  runAIAnalysis(): void {
    console.log('Running AI analysis...');
    // Simulate AI analysis
    setTimeout(() => {
      // Navigate to add certificate page after analysis
      this.router.navigate(['/certificates/add']);
    }, 2000);
  }
}
