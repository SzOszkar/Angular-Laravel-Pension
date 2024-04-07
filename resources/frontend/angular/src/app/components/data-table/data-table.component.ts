import { LaravelService } from '../../services/laravel.service';
import { DataService } from './../../services/data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.css'
})
export class DataTableComponent {
  bookings:any;
  role:any;
  
  constructor(
    private data:DataService,
    private laravel:LaravelService, 
  ) {}

  ngOnInit(): void {
    this.laravel.checkIfAdmin().subscribe(result => {
      if(result == true) {
        this.getBookingData();
      } else {
        this.getUserBookingsData();
      }
    })
  }

  getBookingData() {
    this.data.getBookings().subscribe(result =>{
      this.bookings = result;
    });
  }

  getUserBookingsData() {
    this.data.getUserBookings().subscribe(result =>{
      this.bookings = result;
    });
  }
}
