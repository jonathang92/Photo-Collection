import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.sass']
})
export class ImageCardComponent implements OnInit {
  @Input () image: Object;

  constructor() { }

  ngOnInit() {
  }

}
