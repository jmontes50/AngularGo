import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
import {AuthService} from '../../../services/auth.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  
})

export class NavbarComponent implements OnInit {
  form: FormGroup;                    
  private formSubmitAttempt: boolean;

  _isLoggedIn: Observable<boolean>;   



  constructor(private fb: FormBuilder,private _sAuth:AuthService) { }

  ngOnInit() {

    this._isLoggedIn = this._sAuth.isLogguedIn;

    this.form = this.fb.group({     
      usuario: ['', Validators.required],
      password: ['', Validators.required]
    });

  }

  login(){
    
    if (this.form.valid) {
      this._sAuth.login(this.form.value); 
    }

    
  }

}
