import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NgFor, NgIf } from '@angular/common';
@Component({
  selector: 'app-recordclasses',
  standalone: true,
  imports: [NgIf,NgFor],
  templateUrl: './recordclasses.component.html',
  styleUrl: './recordclasses.component.css'
})
export class RecordclassesComponent {
  videos = [
    { subject: 'Math', duration: 30, description: 'Learn advanced algebra concepts.', url: 'https://www.youtube.com/embed/GJnvCdnrgqQ', sourceType: 'online', isLive: true },
    { subject: 'Science', duration: 45, description: 'Exploring the world of physics.', url: 'https://youtu.be/4-pWViqNHys?t=3', sourceType: 'online', isLive: true },
    { subject: 'English', duration: 45, description: 'Exploring theenglish grammer.', url: 'https://youtu.be/zAIt3VbkL6g', sourceType: 'online', isLive: true },
    // Add more video objects as needed
  ];

  courses = [
    { name: 'Math', syllabus: 'Algebra, Geometry', price: 100 },
    { name: 'Science', syllabus: 'Physics, Chemistry', price: 120 },
    { name: 'English', syllabus: 'Grammar, Literature', price: 80 },
    { name: 'History', syllabus: 'World History, Ancient Civilizations', price: 90 },
    { name: 'Geography', syllabus: 'Physical Geography, Human Geography', price: 110 },
  ];

  selectedVideo: { 
    url: SafeResourceUrl; 
    subject: string; 
    duration: number; 
    description: string; 
    isLive: boolean; 
    sourceType: string;  // Add sourceType here
  } | null = null;

  constructor(private sanitizer: DomSanitizer) {}

  selectVideo(course: any) {
    const video = this.videos.find(v => v.subject === course.name);
    if (video) {
      this.selectedVideo = {
        ...video,
        url: this.sanitizeUrl(video.url) // Sanitize the URL
      };
    }
  }

  sanitizeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  watchLater(course: any) {
    alert(`You have added ${course.name} to your Watch Later list.`);
  }
}
