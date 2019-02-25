import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';

// components across the app

@NgModule({
  imports: [
    RouterModule
  ],
  declarations: [
    AppNavbarComponent
  ],
  exports: [
    AppNavbarComponent
  ]
})
export class SharedModule { }
