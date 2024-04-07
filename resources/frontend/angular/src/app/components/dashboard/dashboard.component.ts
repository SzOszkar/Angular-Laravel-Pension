import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { LaravelService } from '../../services/laravel.service';
import { DataService } from './../../services/data.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  bookings:any;
  role:any;
  events: any = [];
  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin],
    initialView: 'dayGridMonth',
    weekends: true,
    events: this.events,
    showNonCurrentDates: false,
  };

  constructor(
    private data:DataService,
    private laravel:LaravelService, 
  ) {}

  ngOnInit() {
    this.laravel.checkIfAdmin().subscribe(result => {
      if(result == true) {
        this.getBookingData();
      } else {
        this.getUserBookingsData();
      }
    })
  }

  getBookingData() {
    this.data.getBookings().subscribe(result => {
      this.bookings = result;
      this.events = this.bookings.map((booking: any) => ({
        title: 'Room: ' + booking.room_number + ' User: ' + booking.username,
        start: new Date(booking.check_in).toISOString(),
        end: new Date(booking.check_out).toISOString()
      }));
      this.initializeCalendar();
    });
  }

  getUserBookingsData() {
    this.data.getUserBookings().subscribe(result => {
      this.bookings = result;
      this.events = this.bookings.map((booking: any) => ({
        title: 'Room: ' + booking.room_number + ' User: ' + booking.username,
        start: new Date(booking.check_in).toISOString(),
        end: new Date(booking.check_out).toISOString()
      }));
      this.initializeCalendar();
    });
  }

  initializeCalendar() {
    this.calendarOptions = {
      plugins: [dayGridPlugin],
      initialView: 'dayGridMonth',
      weekends: true,
      events: this.events,
      showNonCurrentDates: false,
    };
  }
}
