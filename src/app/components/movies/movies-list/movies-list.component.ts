import { Component, OnInit } from '@angular/core';
import { MoviesServices } from 'src/app/services/movies.service';
import { ActivatedRoute} from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies-list',
  standalone: true,
  imports: [],
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.css'
})
export class MoviesListComponent {

  movies!: any[];
  constructor(
    private moviesServices: MoviesServices,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {


    this.activatedRoute.queryParams.subscribe((params: any) =>{
       this.moviesServices.movieSearch(params.q).subscribe((response: any) =>{
      this.movies = response;
    })
    })
   
  }

}
