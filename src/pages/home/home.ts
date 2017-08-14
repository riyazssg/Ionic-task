import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListPage, AboutPage} from '../shared/pages'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {

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
  let d={ title: 'Group Discussion', apiKey: 'groupDiscusstion' };
  this.navCtrl.push(ListPage, d);
}
goToconfident(){
  let d={ title: 'Confident', apiKey: 'confident' };
  this.navCtrl.push(ListPage, d);
}
goTotesting(){
  let d={ title: 'Software Testing Q&A', apiKey: 'testing' };
  this.navCtrl.push(ListPage, d);
}

goToshare(){

}
goToLike(){
this.navCtrl.push(AboutPage);
}

}
