import { Component } from '@angular/core';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-confirmation',
  standalone: true,
  imports: [],
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.css'
})
export class ConfirmationComponent {
  transactionId = "";

  constructor(private payment: PaymentService) { }

  ngOnInit(): void {
    this.transactionId = this.payment.transactionID;
  }
}
