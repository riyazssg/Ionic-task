import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, apiKey: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'C Programming', apiKey: 'cProgramming' },
     // { title: 'C# Programming', apiKey: 'cshapProgramming' },
      { title: '.Net Framework', apiKey: 'dotNetFramework' },
      { title: 'C# .Net', apiKey: 'csharpDotNet' },
      { title: 'ASP.Net', apiKey: 'aspDotNet' },
      { title: 'HTML/CSS', apiKey: 'htmlCss' },
      { title: 'JavaScript', apiKey: 'javaScrips' },
      { title: 'JQuery', apiKey: 'jQuery' },
      { title: 'ADO.Net', apiKey: 'adoDotNet' },
      { title: 'Angular 1.x', apiKey: 'angular1' },
      { title: 'Angular 2', apiKey: 'angular2' },
      { title: 'SQL Server', apiKey: 'sqlServer' },
      { title: 'ASP.NET MVC', apiKey: 'aspDotNetMVC' },
      { title: 'Web API', apiKey: 'webAPI' },
      { title: 'Linq', apiKey: 'Linq' },
      { title: 'SQL Queries', apiKey: 'SqlQueries' },
      { title: 'Entity Framework', apiKey: 'EF' },
     

    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(ListPage, page);
  }
}
