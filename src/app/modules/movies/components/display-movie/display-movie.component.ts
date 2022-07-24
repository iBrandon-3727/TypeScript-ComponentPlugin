import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Movie } from '../../../../shared/models/movie';

@Component({
  selector: 'app-display-movie',
  templateUrl: './display-movie.component.html',
  styleUrls: ['./display-movie.component.css']
})
export class DisplayMovieComponent implements OnInit {
  @Input() movie: Movie;
  @Output() movieDeleted: EventEmitter<number> = new EventEmitter();
  @Output() movieViewed: EventEmitter<string> = new EventEmitter();


  constructor() { }

  ngOnInit() {}

  onClick() {
    this.movieViewed.emit(this.movie.image_url);
  }

  onClickDelete() {
    this.movieDeleted.emit(this.movie.id);
  }
}