import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  registerForm!: FormGroup;
  accountType = new FormControl('USER'); // Default to 'USER'

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],

      // Fields for Regular User
      subscriptionType: ['FREE'],

      // Fields for Place
      locationId: [''],
      placeType: [''],
      contactFirstName: [''],
      contactLastName: [''],
      contactEmail: [''],
      contactPhoneNumber: ['']
    });
  }

  onAccountTypeChange() {
    const accountType = this.accountType.value;
    if (accountType === 'USER') {
      this.registerForm.get('subscriptionType')?.setValidators(Validators.required);
      this.clearPlaceFields();
    } else if (accountType === 'PLACE') {
      this.registerForm.get('locationId')?.setValidators(Validators.required);
      this.registerForm.get('placeType')?.setValidators(Validators.required);
      this.registerForm.get('contactFirstName')?.setValidators(Validators.required);
      this.registerForm.get('contactLastName')?.setValidators(Validators.required);
      this.registerForm.get('contactEmail')?.setValidators([Validators.required, Validators.email]);
      this.clearRegularUserFields();
    }
    this.registerForm.updateValueAndValidity();
  }

  get accountTypeValue(): any {
    if(this.accountType.value) {
      return this.accountType.value;
    }
  }

  clearRegularUserFields() {
    this.registerForm.get('subscriptionType')?.clearValidators();
    this.registerForm.get('subscriptionType')?.reset();
  }

  clearPlaceFields() {
    this.registerForm.get('locationId')?.clearValidators();
    this.registerForm.get('placeType')?.clearValidators();
    this.registerForm.get('contactFirstName')?.clearValidators();
    this.registerForm.get('contactLastName')?.clearValidators();
    this.registerForm.get('contactEmail')?.clearValidators();
    this.registerForm.get('contactPhoneNumber')?.clearValidators();
    this.registerForm.get('locationId')?.reset();
    this.registerForm.get('placeType')?.reset();
    this.registerForm.get('contactFirstName')?.reset();
    this.registerForm.get('contactLastName')?.reset();
    this.registerForm.get('contactEmail')?.reset();
    this.registerForm.get('contactPhoneNumber')?.reset();

    // User
    this.registerForm.get('subscriptionType')?.setValue("FREE");
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const formData = this.registerForm.value;
      console.log('Form Data:', formData);
      // Submit data to backend...
    }
  }
}
