import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { ToastController } from '@ionic/angular'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  // array filled with random icons. This is used to randomise the displayed image each time the app opens
  private iconList:String[] = [
    "..\\assets\\icons\\beach.png",
  "..\\assets\\icons\\bee.png",
  "..\\assets\\icons\\crown.png",
  "..\\assets\\icons\\earth.png",
  "..\\assets\\icons\\egg.png",
  "..\\assets\\icons\\lion.png",
  "..\\assets\\icons\\monkey.png",
  "..\\assets\\icons\\pflower.png",
  "..\\assets\\icons\\pig.png",
  "..\\assets\\icons\\pinktulup.png",
  "..\\assets\\icons\\present.png",
  "..\\assets\\icons\\redtulup.png",
  "..\\assets\\icons\\saturn.png",
  "..\\assets\\icons\\starfish.png",
  "..\\assets\\icons\\sun.png",
  "..\\assets\\icons\\sunflower.png",
  "..\\assets\\icons\\whale.png"]
//random image every time the page is loaded
  public src:String = this.iconList[Math.floor(Math.random() * (16 + 1))]
  public enabled:Boolean = true;
  public firstName:String = "Heather";
  public lastName:String = "Curran";
  public DOB:String = "20/06/1995"
  public details:String = "Basic Description"
  public EditSaveButton:String = "Edit";

  constructor(private storage:Storage,private toastCtrl:ToastController) { }
  // details for populating a list of checkboxes
  public form = [
    { val: 'Nintendo Switch', isChecked: false },
    { val: 'PlayStation', isChecked: false },
    { val: 'Xbox', isChecked: false },
    { val: 'PC', isChecked: false }
  ];
  // on initalisation, pulls that saved data and displays the saved user information
  // logs to console the data as part of testing
  ngOnInit() {
    this.storage.create()
    .then(()=>{
      this.storage.get("firstName").then((name)=>{console.log("getting : " + name); this.firstName = name}).catch();// set one value - firstName
      this.storage.get("lastName").then((name)=>{console.log("getting : "+ name ); this.lastName = name}).catch();// set one value - lastName
      this.storage.get("DOB").then((dob)=>{console.log("getting : "+ dob ); this.DOB = dob}).catch();// set one value - Date of birth
      this.storage.get("details").then((details)=>{console.log("getting : "+details ); this.details = details}).catch();// set one value - details
      this.storage.get("platforms").then((form)=>{console.log("getting : "+this.form); if(form != null){this.form = form}}).catch();// set one value - form
    }).catch();
  }

// All data is locked when you go to the page
// you must press edit to begin editing
// once done you press save and the new data is saved and carried over between uses
  Editdata()
  {
    if(this.EditSaveButton == "Edit") 
    {
      this.enabled = false;
      this.EditSaveButton = "Save";
    }
    else
    {
      this.enabled = true;
      this.SaveData();
      this.EditSaveButton = "Edit";
    }
  }
// save data method that saves all the new data
  SaveData()
  {
    console.log(this.firstName+" " + this.lastName+" "+ this.DOB+" "+ this.details);
    this.storage.create()
    .then(()=>
    {
      this.storage.set("firstName",this.firstName).then(()=>{console.log("saving : "+this.firstName )}).catch();// set one value - firstName
      this.storage.set("lastName",this.lastName).then(()=>{console.log("saving : "+this.lastName )}).catch();// set one value - lastName
      this.storage.set("DOB",this.DOB).then(()=>{console.log("saving : "+this.DOB )}).catch();// set one value - Date of birth
      this.storage.set("details",this.details).then(()=>{console.log("saving : "+this.details )}).catch();// set one value - details
      this.storage.set("platforms",this.form).then(()=>{console.log("saving : "+this.form)}).catch();// set one value - form
    })
    .catch();
    this.openToast();
  }

  // async method for displaying toast pop up when data is saved. This is called above in the saveData() method
  async openToast() {  
    const toast = await this.toastCtrl.create({  
      message: 'Data Saved',   
      duration: 200  
    });  
    toast.present();  
  }
}
