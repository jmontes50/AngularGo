import { Component, OnInit } from '@angular/core';
import {GoogleMapsAPIWrapper} from '@agm/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

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

  constructor(private _sMaps:GoogleMapsAPIWrapper) { }

  ngOnInit() {
  }
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

  isLocation(){
    
    // this._sMaps.createPolygon({paths:this.coords}).then((response)=>{
    //   console.log(response.getPath());
      
    // })
    let algo = this._sMaps.createPolygon({paths:this.coords});
    console.log(algo);

  };
    
    
  
}
