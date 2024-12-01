import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartComponent } from '../cart/cart.component';
import { PaymentComponent } from '../payment/payment.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CartComponent,PaymentComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToCart() {
    this.router.navigate(['cart']);
  }
}
