import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //private isAuthenticated!: boolean;
  constructor() { }

  public isRouteAuthenticated():boolean{
    return false;
  }

  // public setIsAuthenticated(isAuth:boolean):void{
  //   this.isAuthenticated = isAuth;
  // }
 
}
