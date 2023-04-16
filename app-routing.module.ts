import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMoviesComponent } from './add-movies/add-movies.component';
import { MoviesHomeComponent } from './movies-home/movies-home.component';

const routes: Routes = [
  {path:'addmovies',component:AddMoviesComponent},
  {path:'',component:MoviesHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
