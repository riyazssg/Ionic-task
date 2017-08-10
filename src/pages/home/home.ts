import { Component } from '@angular/core';
import { NavController, ActionSheetController  } from 'ionic-angular';
import { ListPage} from '../list/list'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
isFollowing=false;
  constructor(public navCtrl: NavController, public actionsheetCtrl: ActionSheetController) {

  }
goToSelfIntro(){
  let d={ title: 'Self Introduction', apiKey: 'selfIntro' };
  this.navCtrl.push(ListPage, d);
}

goToInterviewTips(){
let d={ title: 'Interview Tips', apiKey: 'InterviewTips' };
  this.navCtrl.push(ListPage, d);
}
goTohrInterview(){
let d={ title: 'HR Interview Q&A', apiKey: 'hrInterview' };
  this.navCtrl.push(ListPage, d);
}
goTogroupDiscusstion(){
  let d={ title: 'Group Discusstion', apiKey: 'groupDiscusstion' };
  this.navCtrl.push(ListPage, d);
}
goToconfident(){
  let d={ title: 'Confident', apiKey: 'confident' };
  this.navCtrl.push(ListPage, d);
}
openMenu() {
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Quick Links',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'About',
          role: 'destructive',
          icon: 'information-circle',
          handler: () => {
            console.log('Delete clicked');
          }
        },
        {
          text: 'Share',
          icon: 'share',
          handler: () => {
            console.log('Share clicked');
          }
        },
        {
          text: 'Like',
          icon: 'thumbs-up',
          handler: () => {
            console.log('Play clicked');
          }
        },
        {
          text: 'Favorite',
          icon: 'heart-outline',
          handler: () => {
            console.log('Favorite clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel', // will always sort to be on the bottom
          icon: 'close',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
pageShare(){

}

}
