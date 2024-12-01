import { CommonModule, NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  standalone: true,
  imports: [NgClass,NgFor,CommonModule,FormsModule],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css'
})
export class ContactusComponent {
  searchCity: string = ''; // Input model for the search field

  // Original list of cities with data
  cities = [
    { name: 'Mumbai', addressLink: 'https://www.justdial.com/Mumbai/Jewellery-Showrooms/nct-10282098', stores: 5, iconImage: 'https://c8.alamy.com/comp/2A3J6HJ/mumbai-city-icon-architectural-symbol-of-mumbai-gateway-of-india-indian-architecture-indian-famous-travel-plalce-2A3J6HJ.jpg' },

    { name: 'Delhi', addressLink: 'https://www.justdial.com/Delhi/Jewellery-Showrooms-Chandrani-Pearls/nct-11613014?trkid=2160079-delhi&term=Jewellery%20Showrooms', stores: 3, iconImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKLIhUQN_SMdrSP9W38wbTwllCaiYDXHME0HpYDFe5a7bOtjenhzpGHGO40TBvwkHBOCs&usqp=CAU' },

    { name: 'Kolkata', addressLink: 'https://www.justdial.com/Kolkata/Jewellery-Showrooms/nct-10282098', stores: 3, iconImage: 'https://c8.alamy.com/comp/2F4EP8E/outline-kolkata-india-city-skyline-with-historic-buildings-isolated-on-white-vector-illustration-kolkata-cityscape-with-landmarks-2F4EP8E.jpg' },

    { name: 'Hyderabad', addressLink: 'https://link2', stores: 3, iconImage: 'https://thumbs.dreamstime.com/z/charminar-hyderabad-india-vector-india-indian-sketch-vector-illustration-vector-illustration-architecture-building-famous-monument-134356536.jpg' },
    
    { name: 'Patna', addressLink: 'https://link2', stores: 3, iconImage: 'https://www.shutterstock.com/image-vector/india-patna-city-skyline-isolated-260nw-2187524005.jpg' }
  ];

  // Filtered list of cities based on search input
  filteredCities = this.cities;

  // Filter cities based on the search input
  onSearch() {
    this.filteredCities = this.cities.filter(city =>
      city.name.toLowerCase().includes(this.searchCity.toLowerCase())
    );
  }

  goToShop() {
    // Handle the navigation to the shop page
  }
}
