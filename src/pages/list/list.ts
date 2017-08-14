import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController,AlertController } from 'ionic-angular';
import {Questions} from '../shared/data';
import { AnsDetailsPage} from '../ans-details/ans-details'
import { HomePage} from '../home/home';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  apiKey:any;
  questionList:any;

  constructor(public navCtrl: NavController,
   public navParams: NavParams,    
   public questions:Questions,
   public alertController: AlertController,
   
   public loadingController:LoadingController) {   
  
  }
  goToHome(){
this.navCtrl.setRoot(HomePage);
  }
  Tempitems:any;
items:any;
 getItems(ev) {
     // set val to the value of the ev target
    var val = ev.target.value;

    // rest the filtered value
    this.Tempitems=this.questionList;
    
    let filteredTeams = [];

// searching condition  based on qustions 
  if (val && val.trim() != '') {
      this.items = this.Tempitems.filter((item) => {
        
        if(item.qus.toLowerCase().indexOf(val.toLowerCase()) > -1){
          filteredTeams.push(item);
        }
      })
      this.Tempitems=filteredTeams;
    }

  }
  confirmedExit: boolean = false;
ionViewWillLeave() {
//  this.events.publish('menu:opened', '');
//      console.log("Looks like I'm about to leave :(");
  //  if (!this.confirmedExit) {
  //     let confirm = this.alertController.create({
  //       //title: 'Message?',
  //       message: 'Are you sure you want to exit?',
  //       buttons: [
  //         {
  //           text: 'Yes',
  //           handler: () => {             
  //             alert("adv");
  //           this.confirmedExit=true;
  //           }
  //         },
  //         { text: 'No' }
  //       ]
  //     });
  //     confirm.present();
  //   } 
  }

ionViewDidLoad(){ 
  
    console.log(this.navParams.data);
   this.selectedItem = this.navParams.data;
 
  this.apiKey=this.selectedItem.apiKey;

    if(this.apiKey==="cProgramming") 
       this.questionList=this.questions.cProgramming;

    else if(this.apiKey==="cshapProgramming") 
       this.questionList=this.questions.cshapProgramming;

    else if(this.apiKey==="dotNetFramework") 
       this.questionList=this.questions.dotNetFramework;

        else if(this.apiKey==="csharpDotNet") 
       this.questionList=this.questions.csharpDotNet;

        else if(this.apiKey==="aspDotNet") 
       this.questionList=this.questions.aspDotNet;

        else if(this.apiKey==="htmlCss") 
       this.questionList=this.questions.htmlCss;

        else if(this.apiKey==="javaScrips") 
       this.questionList=this.questions.javaScrips;

        else if(this.apiKey==="jQuery") 
       this.questionList=this.questions.jQuery;

        else if(this.apiKey==="adoDotNet") 
       this.questionList=this.questions.adoDotNet;

        else if(this.apiKey==="angular1") 
       this.questionList=this.questions.angular1;

        else if(this.apiKey==="angular2") 
       this.questionList=this.questions.angular2;

        else if(this.apiKey==="sqlServer") 
       this.questionList=this.questions.sqlServer;

       else if(this.apiKey==="aspDotNetMVC") 
       this.questionList=this.questions.aspDotNetMVC;

       else if(this.apiKey==="webAPI") 
       this.questionList=this.questions.webAPI;

       else if(this.apiKey==="Linq") 
       this.questionList=this.questions.Linq;

       else if(this.apiKey==="SqlQueries") 
       this.questionList=this.questions.SqlQueries;

       else if(this.apiKey==="EF") 
       this.questionList=this.questions.EF;

      else if(this.apiKey==="oops")
        this.questionList=this.questions.oops;

      else if(this.apiKey==="selfIntro")
      this.questionList=this.questions.selfIntro;

      else if(this.apiKey==="InterviewTips")
        this.questionList=this.questions.InterviewTips;

      else if(this.apiKey==="hrInterview")
       this.questionList=this.questions.hrInterview;

      else if(this.apiKey==="groupDiscusstion")
        this.questionList=this.questions.groupDiscusstion;

      else if(this.apiKey==="confident")
       this.questionList=this.questions.confident;

       else if(this.apiKey==="aspDotNetCore")
       this.questionList=this.questions.aspDotNetCore;
        else if(this.apiKey==="wcf")
       this.questionList=this.questions.wcf;

       else if(this.apiKey==="wpf")
       this.questionList=this.questions.wpf;

else if(this.apiKey==="testing")
       this.questionList=this.questions.testing;

       this.Tempitems=this.questionList;
console.log(this.questionList);
//   let loader = this.loadingController.create({
//       content: `Getting Questions...`
//       //spinner: 'dots'
//     });

// loader.present().then(() => {   

//   if(this.apiKey==="cProgramming") 
//     this.questionList=this.questions.cProgramming;

  
// loader.dismiss();
//   })

}

  itemTapped(e) {
console.log(e);
   localStorage.setItem("title", this.selectedItem.title);
   let dataList={
     items:this.Tempitems,
index:e
   }
    this.navCtrl.push(AnsDetailsPage, dataList);
  }


}
