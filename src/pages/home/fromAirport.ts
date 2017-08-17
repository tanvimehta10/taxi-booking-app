import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-toairpot',
  templateUrl: 'fromAirport.html'
})
 export class fromAirportPage {
  today
   constructor(
       public navCtrl: NavController) {
       this.today = new Date().toISOString();
   }
 }

