import { Component, OnInit, Input } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss'],
})
export class GameCardComponent implements OnInit {

  //input values passed down to the component
  @Input() public Title:String;
  @Input() public Rating:String;
  @Input() public PlayTime:String;
  @Input() public SRC:String;
  @Input() public Genres:String[]
  @Input() public id:String;
  public faves:string;
  public icon:String

  //star - unliked
  //star-outline - liked
  
  constructor(private storage:Storage) { }
  // on initalisation a check is made to the stored Title to see if it had been marked as a favourite
  // assignes the icon based on if it has
  //
  //Favourites is also checked to retrieve data 
  ngOnInit() 
  {
    
    if(this.Title!=null)
    {
      console.log("title is not null")
      this.storage.create().then(()=>{
        this.storage.get(this.Title.toString()).then((icon)=>{
          if(icon != null)
          {
            console.log("getting key" + this.Title +" value "+ this.icon); this.icon = icon
          }
          else{this.icon = "star-outline"}}).catch();
        this.storage.get("Favourites").then((fav)=>{this.faves = fav})
      }).catch();
    }
    else
    {
      this.icon = "star-outline"
    }
  }

  // this method is called on the pressing of the star button
  // it changes the status of the star and saves the data locally for what has been marked
  // an attempt at storing the data to Favourites is made so that it can be retrived from the favourites page.
  likeUnlike()
  {
    if(this.icon=="star-outline") //liking
    {// liking and saving
      this.icon = "star"
      this.storage.create().then(()=>{
        this.storage.set(this.Title.toString(),this.icon).then(()=>{console.log("setting key" + this.Title +" value "+ this.icon)}).catch();
        //this.storage.set("Favourites",null).then().catch();
        this.faves += (","+this.Title) 
        this.storage.set("Favourites",this.faves).then(()=>{console.log("adding" + this.faves +" to favouroites")}).catch();
      }).catch();
      
    }
    else
    {// unlike and remove save
      this.icon = "star-outline"
      this.storage.create().then(()=>{
        this.storage.set(this.Title.toString(),this.icon).then(()=>{console.log("setting key" + this.Title +" value "+ this.icon)}).catch();
        this.storage.set("Favourites",null).then().catch();
        //this.storage.get("Favourites").then((fav)=>{
        //  if(fav!=null)
        //    this.faves = fav
        //  this.faves.replace(this.id.toString(),"");
        // console.log("Removing "+ fav + " and now favourits is " + this.faves)
        //}).catch();
        
      }).catch();
    }
  }
}
