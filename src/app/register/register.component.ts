import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,NgIf],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  
  username: string = '';
  password: string = '';
  gender: string = '';
  termsAccepted: boolean = false; // Add this property
  fileToUpload: File | null = null;
  isSubmitted: boolean = false;

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.fileToUpload = file;
    }
  }

  onSubmit() {
    // Check if all conditions are met before submitting
    if (this.username.length > 5 && this.password.length >= 8 && this.termsAccepted && this.fileToUpload) {
      // Set the flag to display success message
      this.isSubmitted = true;
      
      // Show an alert message upon successful registration
      alert('Registered successfully!');

      // Log the form data to the console (for debugging purposes)
      console.log('Form Submitted');
      console.log('Username:', this.username);
      console.log('Password:', this.password);
      console.log('Gender:', this.gender);
      console.log('File:', this.fileToUpload.name);
    } else {
      // If the form is invalid, do nothing or show an alert
      alert('Please fill all the fields correctly.');
    }
  }
}
