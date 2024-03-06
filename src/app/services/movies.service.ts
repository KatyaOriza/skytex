import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private urlBase= 'https://api.themoviedb.org/3/authentication';
  private headers={
    accept: 'application/json',
    Authorization: 'Bearer ab7df88071dede6a39d99d1acda19cbe'
  }
  constructor(private http: HttpClient) { }

  movieSearch(title: string): Observable<any>{
    return this.http.get(this.urlBase,
      {headers: this.headers, params: {query:title}})
      .pipe(map((resp: any)=> resp.results))

  }
  movieSearchId(movieId: string): Observable<any>{
    return this.http.get(this.urlBase + '/movie' + '/' + movieId,
      {
        headers: this.headers
      })
      .pipe(map((resp: any)=> resp.results))

  }
}
