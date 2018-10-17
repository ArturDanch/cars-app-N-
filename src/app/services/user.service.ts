import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { throwError } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

const API_URL = 'https://progress-board-server.herokuapp.com/api/v1/signin';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) {}

  public logIn(authData): Observable<any> {
    return this.http.post(API_URL, authData)
      .catch(err => throwError(err))
        .map(resp => resp)
  }

  public isLoggedIn() {
    return localStorage.getItem('token');
  }
}
