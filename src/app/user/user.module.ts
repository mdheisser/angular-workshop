import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app/shared/shared.module';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './components/user.component';
import { reducer } from './store/user.reducer';
import { UserEffect } from './store/user.effect';
import { UserService } from './service/user.service';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    StoreModule.forFeature('users', reducer),
    EffectsModule.forRoot([UserEffect]),
  ],
  providers: [UserService],
  declarations: [UserComponent],
  exports: [UserComponent]
})

export class UserModule {}
