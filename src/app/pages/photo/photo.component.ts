import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-photo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit, OnDestroy {
  @ViewChild('videoElement') videoElement!: ElementRef<HTMLVideoElement>;
  @ViewChild('canvasElement') canvasElement!: ElementRef<HTMLCanvasElement>;
  
  public videoStream: MediaStream | null = null;
  public photoTaken: boolean = false;
  public capturedImage: string | null = null;
  public cameraError: string | null = null;

  constructor(private router: Router) {}
  
  ngOnInit(): void {
    // Initialize camera when component loads
    this.initCamera();
  }

  ngOnDestroy(): void {
    // Clean up resources when component is destroyed
    this.stopCamera();
  }

  async initCamera(): Promise<void> {
    this.cameraError = null;
    this.photoTaken = false;
    this.capturedImage = null;
    
    try {
      // Request camera access with rear camera preferred
      const constraints = {
        video: {
          facingMode: 'environment', // Use rear camera if available
          width: { ideal: 1280 },
          height: { ideal: 720 }
        }
      };
      
      this.videoStream = await navigator.mediaDevices.getUserMedia(constraints);
      
      // Wait for the DOM to be ready
      setTimeout(() => {
        if (this.videoElement && this.videoElement.nativeElement) {
          this.videoElement.nativeElement.srcObject = this.videoStream;
        }
      }, 0);
    } catch (error) {
      console.error('Error accessing camera:', error);
      this.cameraError = 'Unable to access camera. Please ensure you have granted camera permissions.';
    }
  }

  stopCamera(): void {
    if (this.videoStream) {
      this.videoStream.getTracks().forEach(track => track.stop());
      this.videoStream = null;
    }
  }

  takePhoto(): void {
    if (!this.videoElement || !this.canvasElement) return;
    
    const video = this.videoElement.nativeElement;
    const canvas = this.canvasElement.nativeElement;
    
    // Set canvas dimensions to match video
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    
    // Draw the current video frame to the canvas
    const context = canvas.getContext('2d');
    if (context) {
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      
      // Convert canvas to image data URL
      this.capturedImage = canvas.toDataURL('image/jpeg');
      this.photoTaken = true;
      
      // Stop the camera after taking photo
      this.stopCamera();
    }
  }

  retakePhoto(): void {
    this.photoTaken = false;
    this.capturedImage = null;
    this.initCamera();
  }
  
  runAIAnalysis(): void {
    console.log('Running AI analysis...');
    // In a real app, this would process the captured image
    // For now, we'll just simulate a delay and then navigate
    setTimeout(() => {
      // Navigate to results or another relevant page
      this.router.navigate(['/certificates']);
    }, 2000);
  }
}
