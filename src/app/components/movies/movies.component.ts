import { Component, OnInit } from '@angular/core';
import {MovieService} from "../../services/movie.service";

@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
  styles: []
})
export class MoviesComponent implements OnInit {
  popularMoviesList: Array<Object>;
  nowInTheastersList: Array<Object>;
  searchStr: string;
  searchRes: Array<Object> = [];

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.getPopular()
      .subscribe(
        response => {
          this.popularMoviesList = response.results;
          // console.log(response.results);
        })

    this.movieService.getInTheaters()
      .subscribe(
        response => {
          this.nowInTheastersList = response.results;
          // console.log(response.results);
        })


  }


  searchMovies(){
    this.movieService.searchMovie(this.searchStr)
      .subscribe(response => {
        this.searchRes = response.results;
        console.log(response.results)

      })


  }





}
