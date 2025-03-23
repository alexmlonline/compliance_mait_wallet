import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-photo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="photo-container">
      <h2>Scan LCR</h2>
      
      <div class="camera-frame">
        <div class="corner top-left"></div>
        <div class="corner top-right"></div>
        <div class="center-cross"></div>
        <div class="corner bottom-left"></div>
        <div class="corner bottom-right"></div>
      </div>
      
      <div class="camera-button-container">
        <button class="camera-button"></button>
      </div>
      
      <div class="divider"></div>
      
      <p class="instruction-text">
        Make sure that the image is clear and readable.
      </p>
      
      <div class="divider"></div>
      
      <p class="terms-text">
        You agree to the Terms and Conditions when you use this application.
      </p>
      
      <button class="ai-analysis-button" (click)="runAIAnalysis()">
        Run AI Analysis
      </button>
    </div>
  `,
  styles: [`
    .photo-container {
      padding: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      max-width: 500px;
      margin: 0 auto;
    }
    
    h2 {
      margin-bottom: 30px;
      font-size: 1.5rem;
      font-weight: 500;
      align-self: flex-start;
    }
    
    .camera-frame {
      width: 280px;
      height: 280px;
      position: relative;
      margin-bottom: 30px;
    }
    
    .corner {
      position: absolute;
      width: 30px;
      height: 30px;
      border-color: #666;
    }
    
    .top-left {
      top: 0;
      left: 0;
      border-top: 2px solid;
      border-left: 2px solid;
    }
    
    .top-right {
      top: 0;
      right: 0;
      border-top: 2px solid;
      border-right: 2px solid;
    }
    
    .bottom-left {
      bottom: 0;
      left: 0;
      border-bottom: 2px solid;
      border-left: 2px solid;
    }
    
    .bottom-right {
      bottom: 0;
      right: 0;
      border-bottom: 2px solid;
      border-right: 2px solid;
    }
    
    .center-cross {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 20px;
      height: 20px;
    }
    
    .center-cross:before, .center-cross:after {
      content: '';
      position: absolute;
      background-color: #666;
    }
    
    .center-cross:before {
      width: 20px;
      height: 2px;
      top: 9px;
    }
    
    .center-cross:after {
      height: 20px;
      width: 2px;
      left: 9px;
    }
    
    .camera-button-container {
      margin-bottom: 30px;
    }
    
    .camera-button {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background-color: #666;
      border: 4px solid #999;
      cursor: pointer;
    }
    
    .divider {
      width: 100%;
      height: 1px;
      background-color: #ddd;
      margin: 15px 0;
    }
    
    .instruction-text {
      text-align: center;
      color: #666;
      font-size: 0.9rem;
      margin: 0;
    }
    
    .terms-text {
      text-align: center;
      color: #666;
      font-size: 0.9rem;
      margin: 15px 0 30px;
    }
    
    .ai-analysis-button {
      background-color: #4CAF50;
      color: white;
      border: none;
      border-radius: 20px;
      padding: 10px 20px;
      font-size: 1rem;
      cursor: pointer;
    }
    
    .ai-analysis-button:hover {
      background-color: #45a049;
    }
  `]
})
export class PhotoComponent {
  constructor(private router: Router) {}
  
  runAIAnalysis(): void {
    console.log('Running AI analysis...');
    // In a real app, this would trigger AI processing
    // For now, we'll just simulate a delay and then navigate
    setTimeout(() => {
      // Navigate to results or another relevant page
      this.router.navigate(['/certificates']);
    }, 2000);
  }
}
