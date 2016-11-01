import { Component } from '@angular/core';
import {Http, Jsonp} from "@angular/http";
import {MovieService} from "./services/movie.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(private http: Http, private movieService: MovieService, private jsonp: Jsonp){}
}
