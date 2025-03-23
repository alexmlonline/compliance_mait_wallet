import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  template: `
    <div class="profile-container">
      <h2>Service Specialist Profile</h2>
      
      <form [formGroup]="profileForm" (ngSubmit)="onSubmit()" class="profile-form">
        <div class="avatar-section">
          <div class="avatar-placeholder">
            <span class="avatar-icon">👤</span>
          </div>
          <div class="occupation">Electrician</div>
        </div>
        
        <div class="form-field">
          <label for="email">Email</label>
          <div class="input-container">
            <input id="email" type="email" formControlName="email" placeholder="Enter / Edit">
          </div>
        </div>
        
        <div class="form-field">
          <label for="password">Password</label>
          <div class="input-container">
            <input id="password" type="password" formControlName="password" placeholder="Enter / Edit">
          </div>
        </div>
        
        <div class="form-field">
          <label for="fullName">Full Name</label>
          <div class="input-container">
            <input id="fullName" type="text" formControlName="fullName" placeholder="Enter / Edit">
          </div>
        </div>
        
        <div class="form-field">
          <label for="dateOfBirth">Date of Birth</label>
          <div class="input-container select-container">
            <input id="dateOfBirth" type="date" formControlName="dateOfBirth" placeholder="Select / Edit">
            <div class="select-icon">▼</div>
          </div>
        </div>
        
        <div class="form-field">
          <label for="phoneNumber">Phone Number</label>
          <div class="input-container">
            <input id="phoneNumber" type="tel" formControlName="phoneNumber" placeholder="Enter / Edit">
          </div>
        </div>
        
        <div class="form-field">
          <label for="streetAddress">Street Address</label>
          <div class="input-container">
            <input id="streetAddress" type="text" formControlName="streetAddress" placeholder="Enter / Edit">
          </div>
        </div>
        
        <div class="form-field checkbox-field">
          <div class="checkbox-container">
            <input 
              type="checkbox" 
              id="availableForWork" 
              formControlName="availableForWork"
            >
            <label for="availableForWork">Available For Work</label>
          </div>
        </div>
        
        <div class="form-field">
          <label for="region">Region</label>
          <div class="input-container select-container">
            <select id="region" formControlName="region">
              <option value="" disabled selected>Select / Edit</option>
              <option value="north">North</option>
              <option value="south">South</option>
              <option value="east">East</option>
              <option value="west">West</option>
              <option value="central">Central</option>
            </select>
            <div class="select-icon">▼</div>
          </div>
        </div>
        
        <div class="form-actions">
          <button type="submit" class="save-button">Save</button>
        </div>
      </form>
    </div>
  `,
  styles: [`
    .profile-container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }

    h2 {
      font-size: 1.5rem;
      margin-bottom: 20px;
      color: #333;
    }

    .profile-form {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }

    .avatar-section {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 20px;
    }

    .avatar-placeholder {
      width: 80px;
      height: 80px;
      background: #e0e0e0;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 10px;
    }

    .avatar-icon {
      font-size: 2.5rem;
    }

    .occupation {
      color: #666;
      font-size: 1rem;
    }

    .form-field {
      display: flex;
      flex-direction: column;
      gap: 5px;
    }

    label {
      font-size: 0.9rem;
      color: #666;
    }

    .input-container {
      position: relative;
    }

    input, textarea, select {
      width: 100%;
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 4px;
      background-color: #f5f5f5;
      font-size: 0.9rem;
    }

    .select-container {
      position: relative;
    }

    .select-icon {
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
      pointer-events: none;
      color: #666;
    }

    .checkbox-field {
      flex-direction: row;
      align-items: center;
    }

    .checkbox-container {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    input[type="checkbox"] {
      width: 20px;
      height: 20px;
      margin: 0;
    }

    .form-actions {
      display: flex;
      justify-content: flex-end;
      margin-top: 20px;
    }

    .save-button {
      background-color: #4CAF50;
      color: white;
      border: none;
      border-radius: 20px;
      padding: 8px 25px;
      font-size: 1rem;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    .save-button:hover {
      background-color: #45a049;
    }

    /* Responsive styles */
    @media (max-width: 768px) {
      .profile-container {
        padding: 15px;
      }
    }
  `]
})
export class ProfileComponent {
  profileForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      fullName: ['', Validators.required],
      dateOfBirth: [''],
      phoneNumber: ['', Validators.required],
      streetAddress: ['', Validators.required],
      availableForWork: [false],
      region: ['']
    });
  }

  onSubmit(): void {
    if (this.profileForm.valid) {
      console.log('Profile form submitted:', this.profileForm.value);
      // Here you would typically send the data to a service
    } else {
      // Mark all fields as touched to trigger validation messages
      Object.keys(this.profileForm.controls).forEach(key => {
        this.profileForm.get(key)?.markAsTouched();
      });
    }
  }
}