import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [NgFor,NgClass],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  constructor(private router: Router) {}
  tests = [
    { subject: 'Math', duration: '1 hour' },
    { subject: 'Science', duration: '1.5 hours' },
    { subject: 'English', duration: '45 minutes' },
    { subject: 'History', duration: '1 hour' },
    { subject: 'Geography', duration: '50 minutes' }
  ];

  assignments = [
    { subject: 'Math', score: 85, dueDate: '2024-10-20' },
    { subject: 'Science', score: 92, dueDate: '2024-10-22' },
    { subject: 'English', score: 78, dueDate: '2024-10-25' },
    { subject: 'History', score: 88, dueDate: '2024-10-18' },
    { subject: 'Geography', score: 90, dueDate: '2024-10-24' }
  ];
  goToTestnow() {
    this.router.navigate(['testnow']);
  }
}
