import { Action } from '@ngrx/store';
import { User } from '@app/user/service/user.service';

export const CREATE_USER = '[CREATE] User';
export const CREATE_USER_SUCCESS = '[CREATE] User Success';
export const CREATE_USER_ERROR = '[CREATE] User Error';

export const GET_USERS = '[ALL] Users';
export const GET_USERS_SUCCESS = '[ALL] Users Success';
export const GET_USERS_ERROR = '[USER] Users Error';

export class CreateUser implements Action {
  readonly type = CREATE_USER;

  constructor(public payload: User) {}
}

export class CreateUserSucces implements Action {
  readonly type = CREATE_USER_SUCCESS;
  constructor(public payload: User) {}
}

export class CreateUserError implements Action {
  readonly type = CREATE_USER_ERROR;
  constructor(public payload: Error) {}
}

export class GetUsers implements Action {
  readonly type = GET_USERS;
}

export class GetUsersSucces implements Action {
  readonly type = GET_USERS_SUCCESS;
  constructor(public payload: User[]) {}
}

export class GetUsersError implements Action {
  readonly type = GET_USERS_ERROR;
  constructor(public payload: Error) {}
}

export type UserActions =
  | CreateUser
  | CreateUserSucces
  | CreateUserError
  | GetUsers
  | GetUsersSucces
  | GetUsersError;
