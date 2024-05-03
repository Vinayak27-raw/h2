// authentication.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  isAuthenticated = false; 

  constructor() { }

  login() {
 
    this.isAuthenticated = true;
  }

  logout() {

    this.isAuthenticated = false;
  }
}


