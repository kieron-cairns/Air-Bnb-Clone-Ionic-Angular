import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //set the userIsauthenticated as a private property and create a getter
  //so the varibale cannot be dierclty modified outside of this class

  //the user is forced to change the variable within this class only.

 private _userIsAuthenticated = false;

 get userIsAuthenticated() {
   return this._userIsAuthenticated;
 }

  constructor() { }

  login() {
    this._userIsAuthenticated = true;
  }

  logout() {
    this._userIsAuthenticated = false;
  }
}
