import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import {Questions} from '../shared/data';
import { AnsDetailsPage} from '../ans-details/ans-details'
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
   public loadingController:LoadingController) {   
  
  }
  
ionViewDidLoad(){ 
  //this.r="<h1>Program 4: Factorial series in c</h1><pre class='prettyprint linenums'><ol class='linenums'><li class='L0'><span class='com'>#include</span><span class='str'>&lt;stdio.h&gt;</span></li><li class='L1'><span class='kwd'>int</span><span class='pln'> main</span><span class='pun'>(){</span></li><li class='L2'><span class='pln'>  </span><span class='kwd'>long</span><span class='pln'> f</span><span class='pun'>=</span><span class='lit'>1</span><span class='pun'>;</span></li><li class='L3'><span class='pln'>  </span><span class='kwd'>int</span><span class='pln'> i</span><span class='pun'>,</span><span class='pln'>num</span><span class='pun'>,</span><span class='pln'>min</span><span class='pun'>,</span><span class='pln'>max</span><span class='pun'>;</span></li><li class='L4'><span class='pln'>&nbsp;</span></li><li class='L5'><span class='pln'>  printf</span><span class='pun'>(</span><span class='str'>'Enter the minimum range: '</span><span class='pun'>);</span></li><li class='L6'><span class='pln'>  scanf</span><span class='pun'>(</span><span class='str'>'%d'</span><span class='pun'>,&amp;</span><span class='pln'>min</span><span class='pun'>);</span></li><li class='L7'><span class='pln'>&nbsp;</span></li><li class='L8'><span class='pln'>  printf</span><span class='pun'>(</span><span class='str'>'Enter the maximum range: '</span><span class='pun'>);</span></li><li class='L9'><span class='pln'>  scanf</span><span class='pun'>(</span><span class='str'>'%d'</span><span class='pun'>,&amp;</span><span class='pln'>max</span><span class='pun'>);</span></li><li class='L0'><span class='pln'>&nbsp;</span></li><li class='L1'><span class='pln'>  printf</span><span class='pun'>(</span><span class='str'>'Factorial series in given range: '</span><span class='pun'>);</span></li><li class='L2'><span class='pln'>  </span><span class='kwd'>for</span><span class='pun'>(</span><span class='pln'>num</span><span class='pun'>=</span><span class='pln'>min</span><span class='pun'>;</span><span class='pln'>num</span><span class='pun'>&lt;=</span><span class='pln'>max</span><span class='pun'>;</span><span class='pln'>num</span><span class='pun'>++){</span></li><li class='L3'><span class='pln'>    f</span><span class='pun'>=</span><span class='lit'>1</span><span class='pun'>;</span></li><li class='L4'><span class='pln'>&nbsp;</span></li><li class='L5'><span class='pln'>    </span><span class='kwd'>for</span><span class='pun'>(</span><span class='pln'>i</span><span class='pun'>=</span><span class='lit'>1</span><span class='pun'>;</span><span class='pln'>i</span><span class='pun'>&lt;=</span><span class='pln'>num</span><span class='pun'>;</span><span class='pln'>i</span><span class='pun'>++)</span></li><li class='L6'><span class='pln'>      f</span><span class='pun'>=</span><span class='pln'>f</span><span class='pun'>*</span><span class='pln'>i</span><span class='pun'>;</span></li><li class='L7'><span class='pln'>&nbsp;</span></li><li class='L8'><span class='pln'>    printf</span><span class='pun'>(</span><span class='str'>'%ld '</span><span class='pun'>,</span><span class='pln'>f</span><span class='pun'>);</span></li><li class='L9'><span class='pln'>  </span><span class='pun'>}</span></li><li class='L0'><span class='pln'>&nbsp;</span></li><li class='L1'><span class='pln'>  </span><span class='kwd'>return</span><span class='pln'> </span><span class='lit'>0</span><span class='pun'>;</span></li><li class='L2'><span class='pun'>}</span></li></ol></pre>";
    console.log(this.navParams.data);
   this.selectedItem = this.navParams.data;
   //this.navParams.data;
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

       else if(this.apiKey==="practical") 
       this.questionList=this.questions.practical;
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

  itemTapped(item) {
console.log(item);
   localStorage.setItem("title", this.selectedItem.title);
    this.navCtrl.push(AnsDetailsPage, item);
  }


}
