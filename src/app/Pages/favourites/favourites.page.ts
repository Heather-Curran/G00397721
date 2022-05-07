import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { APIService } from '../../Services/api.service'

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.page.html',
  styleUrls: ['./favourites.page.scss'],
})
export class FavouritesPage implements OnInit {

  private faves:String;
  private favesArray:String[] = []
  private readInFaves:any[] = []
  constructor(private storage:Storage,private service:APIService) { }

  // on loading in we need to pull data from the saved favourits
  ngOnInit() {
    this.storage.create().then(()=>{
      this.storage.get("Favourites").then((fav)=>{
        this.faves = fav;
        console.log(fav)
        this.favesArray = this.faves.split(',')
        console.log(this.favesArray);
        this.SearchForEachFavourit()
      }).catch();
    }).catch();
  }

 // then search for each one of the favourites and add them to an array
  SearchForEachFavourit()
  {
    console.log("searching for favourites")
    this.favesArray.forEach(element => {
      console.log(element)
      this.service.SetGamesSearchOne(element).subscribe((games)=>{
        this.readInFaves.push(games.results);
      });
    });
    console.log(this.readInFaves)
  }
}
