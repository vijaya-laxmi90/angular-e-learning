import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment',
  standalone: true,
  imports: [NgFor],
  templateUrl: './assignment.component.html',
  styleUrl: './assignment.component.css'
})
export class AssignmentComponent {
  assignments = [
    { subject: 'Math', score: 85, dueDate: '2024-10-20' },
    { subject: 'Science', score: 92, dueDate: '2024-10-22' },
    { subject: 'English', score: 78, dueDate: '2024-10-25' },
    { subject: 'History', score: 88, dueDate: '2024-10-18' },
    { subject: 'Geography', score: 90, dueDate: '2024-10-24' }
  ];
}
