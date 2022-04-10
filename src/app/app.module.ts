import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from './auth/auth.module';

//import { DashboardComponent } from './components/dashboard/dashboard.component';
//import { MoviesComponent } from './components/movies/movies.component';
//import { MovieModule } from './components/movies/movie.module';
//import { ProfileComponent } from './components/profile/profile.component';
//import { ProfileModule } from './components/profile/profile.module';



@NgModule({
  declarations: [
    AppComponent,
    //DashboardComponent,
    //MoviesComponent,
    //ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthModule,
    HttpClientModule,
    //MovieModule,
    //ProfileModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
