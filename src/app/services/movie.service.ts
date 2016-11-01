import { Injectable } from '@angular/core';
import {Jsonp} from '@angular/http'
import 'rxjs/Rx'

@Injectable()
export class MovieService {
  apikey: string;
  baseUrl = 'https://api.themoviedb.org/3/discover/movie';
  jsonpCallback = '?callback=JSONP_CALLBACK';
  popularMovies = '&sort_by=popularity.desc';
  currentReleases = '&primary_release_date.gte=2016-10-27&primary_release_date.lte=2016-11-15'


  constructor(private jsonp: Jsonp) {
    this.apikey = '&api_key=e9a715ccb580018352698eabf2719eff'
    console.log('Service has started')
  }

  getPopular(){
    return this.jsonp.get(this.baseUrl + this.jsonpCallback + this.popularMovies + this.apikey)
      .map(result => result.json())
  }

  getInTheaters(){
    return this.jsonp.get(this.baseUrl + this.jsonpCallback + this.currentReleases + this.apikey)
      .map(result => result.json())
  }



  searchMovie(searchStr){
    return this.jsonp.get('https://api.themoviedb.org/3/search/movie' + this.jsonpCallback + '&query=' + searchStr + '&sort_by=popularity.desc' + this.apikey)
      .map(result => result.json())

  }

  movieDetails(id){
    return this.jsonp.get('https://api.themoviedb.org/3/movie/' + id + this.jsonpCallback + this.apikey)
      .map(result => result.json())
  }
}

