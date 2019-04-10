import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  

  lat: number = -16.4361585;
  lng: number = -71.5229282;

  constructor() { }
  
  ngOnInit() {
  }
  
  
}
