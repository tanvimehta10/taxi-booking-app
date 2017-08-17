import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { WeatherPage } from '../pages/weather/weather';
import { ContactPage } from '../pages/contact/contact';
import { FlightsPage } from '../pages/flights/flights';
import { SharePage } from '../pages/share/share';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { fromAirportPage } from '../pages/home/fromAirport';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    WeatherPage,
    ContactPage,
    FlightsPage,
    SharePage,
    HomePage,
    TabsPage,
    fromAirportPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WeatherPage,
    ContactPage,
    FlightsPage,
    SharePage,
    HomePage,
    TabsPage,
    fromAirportPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
