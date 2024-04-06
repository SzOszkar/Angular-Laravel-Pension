import { Component, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CrudService } from '../../services/crud.service';
import { Booking } from '../../classes/booking';
import { DataService } from './../../services/data.service';

@Component({
  selector: 'edit-modal-content',
  templateUrl: './edit-modal-content.component.html',
  styleUrl: './edit-modal.component.css'
})
export class EditModalContent {
  rooms:any;
  user:any;
  existingBooking:any;
  booking = new Booking();
  public error:any = [];

  @Input() bookingId: any;
  
  constructor(
    public activeModal: NgbActiveModal, 
    private crud: CrudService,
    private data: DataService,
  ) { }

  ngOnInit(): void {
    this.getRoomsData();
    this.getBookingDataById();
  }

  onClick() {

  }

  getRoomsData() {
    this.data.getRooms().subscribe(result =>{
      this.rooms = result;
    });
  }

  getBookingDataById() {
    this.data.getBooking(this.bookingId).subscribe(result =>{
      this.existingBooking = result;
      this.booking = this.existingBooking;
    });
  }

  editData() {
    this.crud.editBooking(this.booking, this.bookingId).subscribe(
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
  selector: 'edit-modal-component',
  templateUrl: './edit-modal.component.html',
  styleUrl: './edit-modal.component.css'
})

export class EditModalComponent {
  @Input() bookingId: any;

  constructor(public modalService: NgbModal) { }

  open() {
    const modalRef = this.modalService.open(EditModalContent);
    modalRef.componentInstance.bookingId = this.bookingId;
  }
}