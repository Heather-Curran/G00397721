import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { APIService } from '../../Services/api.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  private gameSearchResults:any = [];
  constructor(private service:APIService) { }

  ngOnInit() {
  }
  // search for page method calls the service and uses the search method of the service
  // this method is called when the user changes inputs on the html side of the application
  // while typing it makes a call each time the user makes any kind of new input
  SearchForGame(input:String)
  {
    this.service.SetGamesSearch(input).subscribe((games)=>{
      this.gameSearchResults = games.results;
      console.log(this.gameSearchResults)
    });
    
  }
}
