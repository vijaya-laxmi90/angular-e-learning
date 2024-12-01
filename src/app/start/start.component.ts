import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
@Component({
  selector: 'app-start',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './start.component.html',
  styleUrl: './start.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class StartComponent {

}
