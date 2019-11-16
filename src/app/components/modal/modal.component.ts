import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass']
})
export class ModalComponent implements OnInit {

  @Input() image;
  url: string = '';
  title: string = '';

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {
    // load the content of the image
    this.url = this.image.url
    this.title = this.image.title
  }
}
