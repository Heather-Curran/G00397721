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

  SearchForGame(input:String)
  {
    this.service.SetGamesSearch(input).subscribe((games)=>{
      this.gameSearchResults = games.results;
      console.log(this.gameSearchResults)
    });
    
  }
}
