import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { environment } from '@env/environment';

// is empty because is only for initial configuration
const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: environment.production ? false : true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
