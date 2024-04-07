import { Component, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CrudService } from '../../services/crud.service';

@Component({
  selector: 'delete-modal-content',
  templateUrl: './delete-modal-content.component.html',
  styleUrl: './delete-modal.component.css'
})
export class DeleteModalContent {
  @Input() bookingId: any;
  
  constructor(
    public activeModal: NgbActiveModal, 
    private crud: CrudService,
  ) { }

  ngOnInit(): void {
    this.deleteData();
  }

  onClick() {

  }

  deleteData() {
    this.crud.deleteBooking(this.bookingId).subscribe(result =>{

    });
  }
}

@Component({
  selector: 'delete-modal-component',
  templateUrl: './delete-modal.component.html',
  styleUrl: './delete-modal.component.css'
})

export class DeleteModalComponent {
  @Input() bookingId: any;

  constructor(public modalService: NgbModal) { }

  open() {
    const modalRef = this.modalService.open(DeleteModalContent);
    modalRef.componentInstance.bookingId = this.bookingId;
  }
}
