import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { DonateComponent } from "../common/donate/donate.component";

@Component({
  selector: 'app-section-9',
  imports: [CommonModule, ReactiveFormsModule, DonateComponent],
  templateUrl: './section-9.component.html',
  styleUrls: ['./section-9.component.css'],
})
export class Section9Component {
  donationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.donationForm = this.fb.group({
      amount: [2000, [Validators.required, Validators.min(1)]],
      fullName: ['', Validators.required],
      dob: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      address: ['', Validators.required],
      pincode: ['', Validators.required],
      city: ['', Validators.required],
      state: ['Uttar Pradesh', Validators.required],
      pan: ['', Validators.required],
      declaration: [false, Validators.requiredTrue],
    });
  }

  onSubmit(): void {
    if (this.donationForm.valid) {
      console.log('Form Submitted', this.donationForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
