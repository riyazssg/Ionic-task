import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-ans-details',
  templateUrl: 'ans-details.html',
})
export class AnsDetailsPage {
qnsDetails:any;
title:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.qnsDetails=this.navParams.data;
    this.title=localStorage.getItem("title");
  }

}
