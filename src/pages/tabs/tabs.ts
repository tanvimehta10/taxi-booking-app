import { Component } from '@angular/core';

import { WeatherPage } from '../weather/weather';
import { ContactPage } from '../contact/contact';
import { FlightsPage } from '../flights/flights';
import { HomePage } from '../home/home';
import { SharePage } from '../share/share';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = WeatherPage;
  tab3Root = FlightsPage;
  tab4Root = SharePage;
  tab5Root = ContactPage;

  constructor() {

  }
}
