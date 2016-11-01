import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'
import {MovieService} from "../../services/movie.service";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styles: []
})
export class MovieComponent implements OnInit {

  movie: any = {};

  constructor(private movieService: MovieService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params
      .map(params => params['id'])
      .subscribe( id =>{
        console.log(id)
        this.movieService.movieDetails(id)
          .subscribe(result => {
            this.movie = result
            console.log(result)
          })
      })

  }

}
