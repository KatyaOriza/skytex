import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  movieTitle!: string;
  constructor(private router: Router){}

  search(event: Event){
    event.preventDefault();
    this.router.navigate(['/movies'],{queryParams:{q: this.movieTitle}});
  }

}

