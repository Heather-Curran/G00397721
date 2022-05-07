import { Component, OnInit } from '@angular/core';

import { APIService } from '../../Services/api.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  private debug:boolean = true;
  private Genres:any = [];
  public addresses:String[] = [];
  public results:any = [];
  public spinner:Boolean = true;
  public next:String;
  public prev:String;

  constructor(private service:APIService) { }

// On initilisation the service pulls data from the api and assignes the data to local variables
// this data is then used in a for loop on the home.page.html to draw components to the screen.
  ngOnInit() {
    this.service.GetGames().subscribe((games)=>{
      this.spinner = false;
      this.results = games['results'];
      this.results = games.results;
      this.addresses.push("https://api.rawg.io/api/genres?key=3985949fbafd4cb7886824d9dd809ad8&dates=2019-09-01,2019-09-30&page_size=40")
      this.addresses.push(games['next'])
      this.next = games['next'];
      if(games['previous'] != null)
      {
      this.prev = games['previous'];
      }
    })
  }

  GoToNext()
  {
    if(this.next != null)
    {
      this.service.GetNextGames(this.next).subscribe((games)=>
      {
        this.results = games['results'];
        this.results = games.results;
        this.addresses.push("https://api.rawg.io/api/genres?key=3985949fbafd4cb7886824d9dd809ad8&dates=2019-09-01,2019-09-30&page_size=40")
        this.addresses.push(games['next'])
        this.next = games['next'];
        if(games['previous'] != null)
        {
        this.prev = games['previous'];
        }
      })
    }
  }
  GoToPrevious()
  {
    if(this.prev != null)
    {
      this.service.GetNextGames(this.prev).subscribe((games)=>
      {
        this.results = games['results'];
        this.results = games.results;
        this.addresses.push("https://api.rawg.io/api/genres?key=3985949fbafd4cb7886824d9dd809ad8&dates=2019-09-01,2019-09-30&page_size=40")
        this.addresses.push(games['next'])
        this.next = games['next'];
        if(games['previous'] != null)
        {
        this.prev = games['previous'];
        }
      })
    }
  }
}
