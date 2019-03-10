import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { UserService, User } from '@app/user/service/user.service';
import * as userActions from './user.action';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class UserEffect {
  constructor(private actions: Actions, private services: UserService) { }

  @Effect()
  createUser = this.actions.pipe(
    ofType(userActions.CREATE_USER),
    map((action: userActions.CreateUser) => action.payload),
    mergeMap(payload => this.services.create(payload)),
    map((reponse) => new userActions.CreateUserSucces(reponse)),
    catchError((error) => [new userActions.CreateUserError(error)])
  );

  @Effect()
  getUsers = this.actions.pipe(
    ofType<userActions.GetUsers>(userActions.GET_USERS),
    switchMap(() => this.services.get()),
    map((users: User[]) => new userActions.GetUsersSucces(users)),
    catchError((error) => [new userActions.GetUsersError(error)])
  );
}
