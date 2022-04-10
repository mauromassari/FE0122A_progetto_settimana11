import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MoviesComponent} from './movies.component';
import { MatCardModule } from '@angular/material/card';
import {FlexLayoutModule} from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: MoviesComponent }];


@NgModule({
  declarations: [MoviesComponent],
  imports: [
    CommonModule,
    MatCardModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MovieModule { }
