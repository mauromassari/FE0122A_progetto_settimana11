import { Component, OnInit } from '@angular/core';
import { DashMovie, MoviesService } from './movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies!: DashMovie[];
  constructor(private movieSrv: MoviesService) {}

  async ngOnInit() {
    this.movies = await this.movieSrv.getPopularMovies();
    console.log(this.movies);
  }

  async addFav(idM: number, i: number) {
    this.movies[i].favIsLoading = true;
    try {
      const newFav = await (await this.movieSrv.addFavorite(idM)).toPromise();
      this.movies[i].favIsLoading = false;
      this.movies[i] = {...this.movies[i],favId:newFav!.id}
    } catch (error) {
      this.movies[i].favIsLoading = false;
      alert(error);
    }
  }
  async removeFav(idF: number, i: number) {
    this.movies[i].favIsLoading = true;
    try {
    await this.movieSrv.removeFavorite(idF).toPromise();
    this.movies[i].favIsLoading = false;
    this.movies[i] = {...this.movies[i],favId:undefined}
  } catch (error) {
    this.movies[i].favIsLoading = false;
    alert(error);
  }
  }

}
