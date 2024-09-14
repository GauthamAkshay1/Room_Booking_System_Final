import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent implements  OnInit{
  bookedRoomsPayments: any[] = [];
  loading: boolean = true;
  error: string | null = null;

  private apiUrl = 'http://localhost:5046/api/Payment/GetBookedRoomsPayments'; // Update with your API base URL
  private cancelUrl = 'http://localhost:5046/api/Payment/CancelBooking'; // API endpoint to cancel booking

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadBookedRoomsPayments();
  }

  loadBookedRoomsPayments(): void {
    this.http.get<any[]>(this.apiUrl)
      .subscribe({
        next: (data) => {
          this.bookedRoomsPayments = data;
          this.loading = false;
        },
        error: (err) => {
          console.error('Error fetching booked rooms payments:', err);
          this.error = 'Failed to load booked rooms payments. Please check the console for details.';
          this.loading = false;
        }
      });
  }

  cancelBooking(roomNumber: string): void {
    // You might need to pass more details based on your backend requirements
    this.http.post(`${this.cancelUrl}`, { roomNumber })
      .subscribe({
        next: () => {
          // Reload the bookings after canceling to reflect changes
          this.loadBookedRoomsPayments();
        },
        error: (err) => {
          console.error('Error canceling booking:', err);
          this.error = 'Failed to cancel booking. Please try again later.';
        }
      });
  }

}
