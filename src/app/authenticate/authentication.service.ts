import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  isUserLoggedIn() {
    debugger
    let user = JSON.parse(localStorage.getItem('userdetail'));
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    localStorage.removeItem('roleId');
  }
}