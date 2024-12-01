import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  searchTerm: string = '';
  username: string = '';
  password: string = '';
  gender: string = '';
  termsAccepted: boolean = false;
  isSubmitted: boolean = false;
  selectedFile: File | null = null;

  constructor(private router: Router) {}

  search() {
    console.log(`Searching for: ${this.searchTerm}`);
  }

  onSubmit() {
    if (this.username.length >= 5 && this.password.length >= 8 && this.termsAccepted) {
      this.isSubmitted = true;
      console.log('Registration successful');
      
      // Redirect to the home page
      this.router.navigate(['/aboutt']);
    }
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    console.log('Selected file:', this.selectedFile);
  }
}
