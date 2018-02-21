import { Injectable } from '@angular/core';

@Injectable()
export class MoviesService {
  movies: Array<Object>;
  movie: Object;

  constructor() { }

  getMovies() {
    return this.movies;
  }

  getMovie(id) {
    return this.movie;
  }
}
