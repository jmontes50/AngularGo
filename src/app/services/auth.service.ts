import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';
import {Router} from '@angular/router';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private logueado = new BehaviorSubject<boolean>(false);

  get isLogguedIn(){
    return this.logueado.asObservable();
  }

  constructor(private _http:HttpClient, private _router: Router) { }

  

  login(user:User){
    if(user.username !== '' && user.password !== ''){
      this.logueado.next(true);
      this._router.navigateByUrl('/inicio');
    }
  }

  logout(){
    this.logueado.next(false);
    this._router.navigateByUrl('/');
  }
}
