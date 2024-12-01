import { Component, ElementRef, ViewChild } from '@angular/core'; // Corrected ViewChild import
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PaymentService } from '../payment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [ CommonModule,FormsModule],
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  amount = 0;

  @ViewChild('paymentRef', { static: true }) paymentRef!: ElementRef; // Corrected ViewChild usage
  
  constructor(private router: Router, private payment: PaymentService) { }

  ngOnInit(): void {
    this.amount = this.payment.totalAmount;
    window.paypal.Buttons({
      style: {
        layout: 'horizontal',
        color: 'blue',
        shape: 'rect',
        label: 'paypal',
      },
      createOrder: (data: any, actions: any) => {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: this.amount.toString(),
                currency_code: 'USD'
              }
            }
          ]
        });
      },
      onApprove: (data: any, actions: any) => {
        return actions.order.capture().then((details: any) => {
          if (details.status === 'COMPLETED') {
            this.payment.transactionID = details.id;
            this.router.navigate(['confirmation']);
          }
        });
      },
      onError: (error: any) => {
        console.log(error);
      }
    }).render(this.paymentRef.nativeElement);
  }
  cancel() {
    this.router.navigate(['cart']);
  }

 
}
