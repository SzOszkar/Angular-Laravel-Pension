import { Component } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from './../../services/data.service';
import { Booking } from '../../classes/booking';
import { LaravelService } from '../../services/laravel.service';
import { CrudService } from '../../services/crud.service';
import { Router } from '@angular/router';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'add-modal-content',
  templateUrl: './add-modal-content.component.html',
  styleUrl: './add-modal.component.css'
})
export class AddModalContent {
  rooms:any;
  booking = new Booking();
  user:any;

  constructor(
    public activeModal: NgbActiveModal, 
    private data: DataService,
    private laravel: LaravelService,
    private crud: CrudService,
    private router: Router,
    private token: TokenService
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
    this.crud.addBooking(this.booking).subscribe(result => {
      window.location.reload();
    });
    this.activeModal.close("Submit");
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
