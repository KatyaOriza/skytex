import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { MoviesListComponent } from "./components/movies/movies-list/movies-list.component";
import { MoviesDetailsComponent } from "./components/movies/movies-details/movies-details.component";

const routes: Routes= [
    
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'movies',
        component: MoviesListComponent
    },
    {
        path: 'movies/:movieId',
        component: MoviesDetailsComponent
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'home'
    },
]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}