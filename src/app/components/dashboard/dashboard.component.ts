import { Component, OnInit } from '@angular/core';
import {MapsAPILoader} from '@agm/core';
declare const google;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  polygon:any;
  longitude = -71.5470836;
  latitude = -16.4147918;
  zoom=12;  

  coords: [
      
    {lat: -71.5365913,lng:-16.3994736 },
    {lat: -71.5359741,lng:-16.3979915 },
    {lat: -71.5370314,lng:-16.397621 },
    {lat: -71.5376271,lng: -16.3990928 },
    {lat: -71.5365806,lng:-16.3994736 }

  ]

  markers = [
    { latitude:-16.4147918, longitude:-71.5470836 },
    { latitude:-16.4211114,longitude:-71.5481674 },
    { latitude:-16.4010668,longitude:-71.53989 },
    { latitude:-16.401139, longitude:-71.533925 },
  ];

  placeMarker(position: any) {
    
    const lat = position.coords.lat;
    const lng = position.coords.lng;
    console.log(lat+" "+lng);
    this.markers.push({ latitude: lat, longitude: lng });
  }

  punto = {
    lat:-16.4147918,
    lng:-71.5470836
  }
 


  constructor(private _sMaps:MapsAPILoader) { }

  ngOnInit() {
    this._sMaps.load().then(()=>{
      this.polygon = new google.maps.Polygon({paths:this.coords});
    });
    const latLng = new google.maps.LatLng(this.punto);
    if(google.maps.geometry.poly.containsLocation(latLng, this.polygon)){
      console.log("exito")
    }else{
      console.log("mas exito pero falta entenderlo")
    }

  }

  // ngAfterViewInit(): void {
  //   // Load google maps script after view init
  //   const DSLScript = document.createElement('script');
  //   DSLScript.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCstdkX8vjyX_IGonfj1u0ZIZ0h6vAq7XA'; // replace by your API key
  //   DSLScript.type = 'text/javascript';
  //   document.body.appendChild(DSLScript);
  //   // document.body.removeChild(DSLScript);
  // }

  //Diagrama de Lineas
  public chartType: string = 'line';

  public chartDatasets: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 200], label: 'Emergencias' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Atenciones' }
  ];

  public chartLabels: Array<any> = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];

  public chartColors: Array<any> = [
    {
      backgroundColor: 'rgba(105, 0, 132, .2)',
      borderColor: 'rgba(200, 99, 132, .7)',
      borderWidth: 2
    },
    {
      backgroundColor: 'rgba(0, 137, 132, .2)',
      borderColor: 'rgba(0, 10, 130, .7)',
      borderWidth: 2
    }
  ];

  public chartOptions: any = {
    responsive: true
  };

  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }

  
    
  
}
