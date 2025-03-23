import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-certificate',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './add-certificate.component.html',
  styleUrls: ['./add-certificate.component.css']
})
export class AddCertificateComponent {
  certificateForm: FormGroup;
  isReplacementLCR: boolean = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.certificateForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      lcrId: ['', Validators.required],
      issuedTo: ['', Validators.required],
      issuedBy: ['', Validators.required],
      issuedDate: ['', Validators.required],
      expiryDate: ['', Validators.required],
      jurisdiction: ['', Validators.required],
      isReplacementLCR: [false],
      replacementLCR: ['']
    });
  }

  toggleReplacementLCR(): void {
    this.isReplacementLCR = !this.isReplacementLCR;
    this.certificateForm.patchValue({
      isReplacementLCR: this.isReplacementLCR
    });

    if (this.isReplacementLCR) {
      this.certificateForm.get('replacementLCR')?.setValidators(Validators.required);
    } else {
      this.certificateForm.get('replacementLCR')?.clearValidators();
      this.certificateForm.get('replacementLCR')?.setValue('');
    }
    this.certificateForm.get('replacementLCR')?.updateValueAndValidity();
  }

  onSubmit(): void {
    if (this.certificateForm.valid) {
      console.log('Certificate form submitted:', this.certificateForm.value);
      // Here you would typically send the data to a service
      // Navigate back to certificates list
      this.router.navigate(['/certificates']);
    } else {
      // Mark all fields as touched to trigger validation messages
      Object.keys(this.certificateForm.controls).forEach(key => {
        this.certificateForm.get(key)?.markAsTouched();
      });
    }
  }
}
