import { Component } from '@angular/core';
import { MoviesService } from '../../../services/movies.service';
import { ActivatedRoute} from 'src/app/services/movies.service';
@Component({
  selector: 'app-movies-details',
  standalone: true,
  imports: [],
  templateUrl: './movies-details.component.html',
  styleUrl: './movies-details.component.css'
})
export class MoviesDetailsComponent{

  movie!: any;

  constructor(
    private moviesServices: MoviesService,
    private activatedRoute: ActivatedRoute) { }

  ngOninit(): void{
    this.activatedRoute.params.subscribe((params: any) =>{
      this.moviesServices.movieSearchId(params.movieId).subscribe((response: any) =>
         this.movie = response);
    })
  }
}
