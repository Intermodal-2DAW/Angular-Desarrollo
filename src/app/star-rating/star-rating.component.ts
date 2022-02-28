import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit {

  auxRating: number;
  @Input() rating: number;
  @Output() ratingChanged = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
    this.restoreRating();
  }

  restoreRating() {
    this.auxRating = this.rating;
  }

  setRating() {
    this.ratingChanged.emit(this.auxRating);
  }

}
