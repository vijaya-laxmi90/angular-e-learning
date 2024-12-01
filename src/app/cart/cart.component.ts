import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PaymentService } from '../payment.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  firstProduct = 'The Cuckoo Calling';
  firstImage = 'pb.jpg';
  firstQuantity = 1;
  firstPrice = 85;
  firstTotal = 85;

  secondProduct = 'RabindraNath Tagore';
  secondImage = 'ch.jpg';
  secondQuantity = 2;
  secondPrice = 9;
  secondTotal = 18;

  thirdProduct = 'The New work Times';
  thirdImage = 'pb.jpg';
  thirdQuantity = 1;
  thirdPrice = 75;
  thirdTotal = 75;

  fourthProduct = 'Karmchand';
  fourthImage = 'pb.jpg';
  fourthQuantity = 1;
  fourthPrice = 95;
  fourthTotal = 95;

  subTotal = 103;
  shipping = 7;
  total = 110;

  constructor(private payment: PaymentService, private router: Router) {}

  ngOnInit(): void {}

  calculate() {
    this.firstTotal = this.firstPrice * this.firstQuantity;
    this.secondTotal = this.secondPrice * this.secondQuantity;
    this.thirdTotal = this.thirdPrice * this.thirdQuantity;  // Corrected this line
    this.fourthTotal = this.fourthPrice * this.fourthQuantity;  // Corrected this line
    this.subTotal = this.firstTotal + this.secondTotal + this.thirdTotal + this.fourthTotal;  // Added all totals for correct subtotal
    this.total = this.subTotal + this.shipping;  // Total includes shipping
  }
  
  goToPayment() {
    this.payment.totalAmount = this.total;
    this.router.navigate(['payment']);
  }
}
