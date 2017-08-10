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
dataindex:number;
youMayLike:any;
goToNext(e){
let en=e+1;
this.dataindex=this.dataindex+en;
this.qnsDetails=this.navParams.data.items[this.dataindex];
this.fnMayLike(this.dataindex);
}
myShare(){
  
}

  ionViewDidLoad() {
   
    this.dataindex=this.navParams.data.index
    this.qnsDetails=this.navParams.data.items[this.dataindex];
    
    this.title=localStorage.getItem("title");
    this.fnMayLike(this.dataindex);
  }

  fnMayLike(index:number){
     let temp=[];
    let localIndex=0;
for(let i=0; i<3; i++) {
   localIndex=++index;     
      
      if(this.navParams.data.items[localIndex])
          temp.push(this.navParams.data.items[localIndex]);
    }
    this.youMayLike=temp;
  }

}
