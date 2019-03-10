import { Component, OnInit } from '@angular/core';
import { User } from '@app/user/service/user.service';
import { Store, select } from '@ngrx/store';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { UserState } from '../store/user.state';
import { CreateUser, GetUsers } from '../store/user.action';
import { Observable } from 'rxjs';
import { getUsers } from '../store/user.reducer';

@Component({
  selector: 'app-user-form',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit {

  public userForm: FormGroup;
  users: Observable<User[]>;

  constructor(private store: Store<UserState>, private formBuilder: FormBuilder) {
    this.store.dispatch(new GetUsers());
  }

  ngOnInit() {

    this.users = this.store.pipe(select(getUsers));
    this.userForm = this.formBuilder.group({
      firstName: ['', [Validators.required as any, Validators.minLength(5) as any]],
      lastName: ['', [Validators.required as any, Validators.minLength(5) as any]]
    });
  }

  onSubmit(user: User) {
    this.store.dispatch(new CreateUser(user));
    this.userForm.reset();
  }
}
