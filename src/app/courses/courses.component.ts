import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [NgIf,NgFor,CommonModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  courses = [
    { name: 'Math', syllabus: 'Algebra, Geometry basics, Quadratic equations', price: 100, description: 'Learn algebra and geometry concepts.' },
    { name: 'Science', syllabus: 'Physics laws, Chemistry reactions, Lab techniques', price: 120, description: 'Explore physics and chemistry fundamentals.' },
    { name: 'English', syllabus: 'Grammar rules, Literature analysis, Creative writing', price: 90, description: 'Improve your grammar and literature analysis.' },
    { name: 'History', syllabus: 'Ancient civilizations, Modern events, Historical figures', price: 110, description: 'Study ancient and modern history.' },
    { name: 'Geography', syllabus: 'Maps, Physical geography, Human geography', price: 80, description: 'Learn about physical and human geography.' },
    { name: 'Computer Science', syllabus: 'Programming basics, Data structures, Algorithms', price: 130, description: 'Introduction to computer programming and algorithms.' },
    { name: 'Art', syllabus: 'Painting techniques, Art history, Modern art', price: 70, description: 'Explore various forms of art and their history.' },
    { name: 'Physical Education', syllabus: 'Fitness principles, Sports rules, Healthy living', price: 60, description: 'Learn about physical fitness and health.' },
    { name: 'Music', syllabus: 'Music theory, Instrumental practice, Composition', price: 95, description: 'Understand music theory and practice instruments.' },
    { name: 'Economics', syllabus: 'Microeconomics principles, Macroeconomic theory, Market analysis', price: 115, description: 'Learn about economic principles and market behavior.' },
  ];

  selectedCourse: any;
  isModalOpen = false;
  paymentSuccess = false;
  successMessage = '';

  showSyllabus: { [key: string]: boolean } = {};

  toggleSyllabus(courseName: string) {
    this.showSyllabus[courseName] = !this.showSyllabus[courseName];
  }

  // Renamed method to avoid conflict
  displaySyllabus(courseName: string) {
    const course = this.courses.find(c => c.name === courseName);
    if (course) {
      alert(course.syllabus); // Show syllabus in an alert (you can change this to a better UI)
    }
  }

  openPaymentModal(course: any) {
    this.selectedCourse = course;
    this.isModalOpen = true;
  }

  closePaymentModal() {
    this.isModalOpen = false;
    this.selectedCourse = null;
  }

  completePurchase() {
    this.paymentSuccess = true;
    this.successMessage = `${this.selectedCourse.name} purchased for ${this.selectedCourse.price} successfully!`;
    alert(this.successMessage); // Display message in an alert box
    this.isModalOpen = false;
    this.selectedCourse = null;
  }
}
