import { Component } from '@angular/core';
import { DataService } from './services/data.service';
import { stringify } from 'querystring';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './components/modal/modal.component'; 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  title = 'kiusys';
  images: Object;
  info: Object;
  aImages: Array<any> = [];
  
  constructor(private data: DataService, private modalService: NgbModal) { }


  ngOnInit() {
    // Get images of the Api
    this.data.getImages().subscribe(
      data => {
        this.images = data;
        this.reorderImages();
      }
    );
  }
  // Reorder all image and save on the a Image Array
  reorderImages(){
    Object.entries(this.images).forEach(([k]) => {
      //Get number of vowels
      let m = this.images[k].title.match(/[aeiou]/gi);
      this.aImages[k] = new Array();
      this.aImages[k]['id'] = this.images[k].id;
      this.aImages[k]['count'] = (m === null) ? 0 : m.length;
      this.aImages[k]['obj'] = this.images[k];
    });
    this.sortById();
    this.sortByCount();
    console.log(this.aImages);
    
  }
  // Sort by id value of array
  sortById(){
    this.aImages.sort(function(a, b) {
      return b['id'] - a['id'];
    });
  }
  // Sort by count value of array
  sortByCount(){
    this.aImages.sort(function(a, b) {
      return a['count'] - b['count'];
    });
  }
  // Open the modal and send the object of the image selected
  openModal(k){
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.image = this.aImages[k]['obj'];
  }
}
