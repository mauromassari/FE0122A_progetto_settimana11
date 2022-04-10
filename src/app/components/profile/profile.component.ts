import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { MoviesService } from '../movies/movies.service';
import { Movie } from 'src/app/models/movie';
import { DashMovie } from '../movies/movies.service';
import { AuthData } from 'src/app/auth/auth.service';
import { Favorite } from 'src/app/models/favorite';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user$ = this.auth.user$

  favoriti!: any;
  movies!: DashMovie[];


  constructor(private auth:AuthService, private movieSrv: MoviesService) {

  }

  async ngOnInit() {
    this.movies = await this.movieSrv.getPopularMovies();
    console.log(this.movies);

    //this.movieSrv.getFavoriti().subscribe(favoriti => this.favoriti = favoriti)

    //(await this.movieSrv.getListaFavoriti()).subscribe(favoriti => {this.favoriti = favoriti})

    //this.movies = this.movieSrv.getPopularMovies()

    //console.log(this.movies)
  }



}
