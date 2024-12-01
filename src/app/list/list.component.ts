import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [NgClass, FormsModule, NgIf, NgFor],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  stepsList: any[] = [
    { stepName: 'Basic Details', isComplete: false },
    { stepName: 'Skills', isComplete: false },
    { stepName: 'Experience', isComplete: false },
   
  ];
  activeStep = this.stepsList[0]; // Default active step
  basicDetails = {
    name: '',
    email: '',
    password: '',
    designation: '',
    contactNo: '',
    alternateContactNo: '',
    personalEmail: '',
    totalYearsOfExperience: '',
    totalMonthsOfExperience: '',
    city: '',
    state: '',
    address: '',
    pincode: '',
    personalCity: '',
    personalState: '',
    personalPincode: '',
    personalAddress: ''
  };

  detailsList: any[] = []; // List to store the added details

  // Method to set active step
  setActiveStep(step: any) {
    this.activeStep = step;
  }

  // Method to add the entered details
  addDetails() {
    this.detailsList.push({ ...this.basicDetails });
    alert('Details added successfully!'); // Alert message
    this.resetForm(); // Reset form after adding the details
  }

  // Method to reset form after adding details
  resetForm() {
    this.basicDetails = {
      name: '',
      email: '',
      password: '',
      designation: '',
      contactNo: '',
      alternateContactNo: '',
      personalEmail: '',
      totalYearsOfExperience: '',
      totalMonthsOfExperience: '',
      city: '',
      state: '',
      address: '',
      pincode: '',
      personalCity: '',
      personalState: '',
      personalPincode: '',
      personalAddress: ''
    };
  }
}
