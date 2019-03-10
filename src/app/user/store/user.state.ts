import { User } from '@app/user/service/user.service';

export interface UserState {
  user: User;
  users: User[];
}

export const initialUserState: UserState = {
  user: null,
  users: null
};
