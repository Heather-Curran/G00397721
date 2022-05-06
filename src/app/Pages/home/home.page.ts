import { Component, OnInit } from '@angular/core';

import { APIService } from '../../Services/api.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  private debug:boolean = true;
  private genreNames:any = [];
  private Genres:any = [];
  public addresses:String[] = [];
  public results:any = [];

  constructor(private service:APIService) { }

  ngOnInit() {
    this.service.GetGames().subscribe((games)=>{
      this.results = games['results'];
      this.results = games.results;
      this.addresses.push("https://api.rawg.io/api/genres?key=3985949fbafd4cb7886824d9dd809ad8&dates=2019-09-01,2019-09-30&page_size=40")
      this.addresses.push(games['next'])
      this.results.forEach(element => {
        this.Genres.push(element.genres);
      });
      
      //this.Genres = games.results;
      if(this.debug)
      {
        console.log(this.Genres)
      }
      //gets name               : this.results[0].name
      //gets background image   : this.results[0].background_image
      //gets metacritic rating  : this.results[0].metacritic
    })
  }
}
