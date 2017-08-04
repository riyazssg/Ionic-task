import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AnsDetailsPage, Questions,HomePage, ListPage } from '../pages/shared/pages'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AnsDetailsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AnsDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Questions,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})



export class AppModule {}
