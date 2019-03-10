import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { catchError, map, tap } from 'rxjs/operators';

import { Endpoints } from '@app/global/endpoints';
import { environment } from '@env/environment';

const routes = {
  user: (c: UserContext) => `/users/${c.id}`,
  users: () => `/users`
};

export interface UserContext {
  id: number;
}

export interface User {
  id: number;
  firstName?: string;
  lastName?: string;
}

@Injectable()
export class UserService {
  constructor(private httpClient: HttpClient) {}

  create(user: User): Observable<User> {
    return this.httpClient.post<User>(routes.users(), user).pipe(
      tap((user: User) =>
        this.log(`added contact w/ id=${user.firstName}`)
      ),
      catchError(this.handleError<User>('create'))
    );
  }

  get(): Observable<User[]> {
    return this.httpClient.get<User[]>(routes.users());
  }
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  private log(message: string) {}
}
