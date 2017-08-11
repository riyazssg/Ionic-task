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
      { title: 'OOPs Concepts', apiKey: 'oops' },
      { title: '.Net Framework', apiKey: 'dotNetFramework' },
      { title: 'SQL Server', apiKey: 'sqlServer' },
      { title: 'C# .Net', apiKey: 'csharpDotNet' },
      { title: 'ASP.Net MVC', apiKey: 'aspDotNetMVC' },
      { title: 'ASP.Net Core', apiKey: 'aspDotNetCore' },
      { title: 'Web API', apiKey: 'webAPI' },
      { title: 'ASP.Net', apiKey: 'aspDotNet' },
      { title: 'ADO.Net', apiKey: 'adoDotNet' },
      { title: 'HTML/CSS', apiKey: 'htmlCss' },
      { title: 'JavaScript', apiKey: 'javaScrips' },
      { title: 'JQuery', apiKey: 'jQuery' },
      { title: 'Angular 1.x', apiKey: 'angular1' },
      { title: 'Angular 2', apiKey: 'angular2' }, 
      { title: 'SQL Queries', apiKey: 'SqlQueries' },
      { title: 'Linq', apiKey: 'Linq' },     
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
