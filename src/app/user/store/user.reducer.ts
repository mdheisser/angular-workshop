import * as actions from './user.action';
import { UserState, initialUserState } from './user.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

/** We get only success state */
export function reducer(state = initialUserState, action: actions.UserActions): UserState {
  switch (action.type) {
    case actions.GET_USERS_SUCCESS:
      return { ...state, users: action.payload };
    case actions.CREATE_USER_SUCCESS:
       console.log(action);
       state.users.push(action.payload);
       return { ...state, user: action.payload };
    default:
      return state;
  }
}

export const getUserState = createFeatureSelector<UserState>('users');
export const getUsers = createSelector(getUserState, (state: UserState) => state.users);
