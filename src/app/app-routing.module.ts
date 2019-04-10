import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule, Router} from '@angular/router';
import {WelcomeComponent} from './components/welcome/welcome.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';


const rutas:Routes = [
  // {path:'',component:NavBarComponent},
  {path:'inicio',component:DashboardComponent},
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(rutas,{useHash:true})
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
