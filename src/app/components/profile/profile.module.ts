import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileComponent } from './profile.component';
import { MatTabsModule } from "@angular/material/tabs";
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: ProfileComponent }];

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class ProfileModule { }
