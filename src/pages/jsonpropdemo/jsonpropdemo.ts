import { Component,OnInit, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the JsonpropdemoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jsonpropdemo',
  templateUrl: 'jsonpropdemo.html',
})
export class JsonpropdemoPage implements OnInit {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JsonpropdemoPage');
    console.log(this.data.properties["Take Selection"].values[0]);
    console.log(this.data.properties["Take Selection"].values[1]);
    this.data1=["ank","de"]; 
    this.data1=["ank1","de1"]; 
    this.data1=["ank2","d2"]; 
    this.data1=["ank3","de3"]; 
    this.data1=[1,2,3,4,3,3,3,3,3,3,32,2,2,2,222];
    console.log(this.data.required);
    //  this.data1.pop();
   // this.data1["ank"].value="ank change";
  //  this.data1["qwqw"].name=" sdfsd"; 
    

   console.log(this.data.required.values );
   //    console.log("  value  "+this.data1["ank"].name);
  }
  ngOnInit(){
    this.data1;
  }

  data={"required":["Load_Type","Company Name","Consigner","Dagerous Godds","Take Selection"],
  "properties":{
    "Load_Type":{"lable":"Load Type",
                  "type":"text",
                  "class":'"secondry-content"',
                  "values":["Load1","Load2"],
                  "value":"Enter Load type"
                },
     "Company Name":{"lable":"Company Name",
                  "type":"text",
                  "class":'"secondry-content"',
                  "value":"Enter company name"
              },
    "Consigner":{"lable":"Consigner",
              "type":"text",
              "class":'"secondry-content"',
              "value":"enter consigner"
          },
   "Dagerous Godds":{"lable":"Dagerous Godds",
              "type":"text",
              "class":'"secondry-content"',
              "values":["10","20"],
              "value":"Enter  Dagerous Godds"
          },
   "Take Selection":{"lable":"Take Selection",
              "type":"text",
              "class":"'secondry-content'",
              "values":["10","20"],
              "value":"Enter Take Selection"
          },
    "Ticket Type":{"lable":"Ticket Type",
              "type":"text",
              "class":"'secondry-content'",
              "values":["ticket1","ticket2"],
              "value":"none"
              
          },
      "Product Type":
          {"lable":"Product Type",
          "type":"text",
          "class":"'secondry-content'",
          "values":["Product1","Product2"]
          } , 
     "Arrival Time":
          {"lable":"Arrival Time",
          
          "class":"'secondry-content'",
          
          }  ,
          "Start Time":
          {"lable":"Start Time",
          
          "class":"'secondry-content'",
          
          }  ,
          "Start Guage":
          {"lable":"Start Guage",
          
          "class":"'secondry-content'",
          "values":["Guage1","Guage2"]
          }  ,
          "Finish Guage":
          {"lable":"Finish uage",
          
          "class":"'secondry-content'",
          "values":["FGuage1","FGuage2"]
          }  ,

  }

}
data1={};
arr1=[];
after_click()
{
 this.data.properties.Load_Type.values=this.arr1;
  console.log(this.data);
  console.log("arr1   "+this.arr1);

}


}
