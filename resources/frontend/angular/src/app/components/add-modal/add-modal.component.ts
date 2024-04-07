import { Component, ViewEncapsulation } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from './../../services/data.service';
import { Booking } from '../../classes/booking';
import { LaravelService } from '../../services/laravel.service';
import { CrudService } from '../../services/crud.service';
import { Router } from '@angular/router';
import { TokenService } from '../../services/token.service';
import { DateFilterFn } from '@angular/material/datepicker';

@Component({
  selector: 'add-modal-content',
  templateUrl: './add-modal-content.component.html',
  styleUrl: './add-modal.component.css',
  encapsulation: ViewEncapsulation.None
})
export class AddModalContent {
  rooms:any;
  booking = new Booking();
  user:any;
  public error:any = [];
  minDate = new Date();
  dateFilter: DateFilterFn<Date | null> = (date: Date | null) => {
    return !!date && date >= this.minDate;
  }
  constructor(
    public activeModal: NgbActiveModal, 
    private data: DataService,
    private crud: CrudService,
  ) { }

  ngOnInit(): void {
    this.getRoomsData();
  }

  onClick() {
    console.log("Submit button was clicked!");
  }

  getRoomsData() {
    this.data.getRooms().subscribe(result =>{
      this.rooms = result;
    });
  }

  insertData() {
    this.crud.addBooking(this.booking).subscribe(
      result=>this.handleResponse(result),
      error=>this.handleError(error)
    );
  }

  handleError(error:any){
    this.error = error.error.errors;
  }

  handleResponse(result:any){
    this.activeModal.close("Submit");
    window.location.reload();
  }
}

@Component({
  selector: 'add-modal-component',
  templateUrl: './add-modal.component.html',
  styleUrl: './add-modal.component.css'
})
export class AddModalComponent {
  constructor(public modalService: NgbModal) { }

  open() {
    const modalRef = this.modalService.open(AddModalContent);
  }
}
