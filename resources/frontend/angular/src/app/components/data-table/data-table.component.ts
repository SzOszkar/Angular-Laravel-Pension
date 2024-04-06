import { CrudService } from '../../services/crud.service';
import { DataService } from './../../services/data.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.css'
})
export class DataTableComponent {
  bookings:any;
  
  constructor(
    private data:DataService, 
  ) {}

  ngOnInit(): void {
    this.getBookingData();
  }

  getBookingData() {
    this.data.getBookings().subscribe(result =>{
      this.bookings = result;
    });
  }
}
