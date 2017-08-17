import { Component } from '@angular/core';
//import { NavController } from 'ionic-angular';
import{ fromAirportPage } from '../home/fromAirport';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
   fromAirportReservationPage = fromAirportPage;
  constructor() {

}

 
}
 
 