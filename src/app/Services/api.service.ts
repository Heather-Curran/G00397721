import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alert } from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http:HttpClient) { }

  private apiKey:String = "?key=3985949fbafd4cb7886824d9dd809ad8"
  public startDate:String = "1950-09-01"
  public endDate = "2022-05-01"
  private apiDates = "&dates="+this.startDate+","+this.endDate
  GetGenres():Observable<any>
  {
    let genreURL="https://api.rawg.io/api/genres" + this.apiKey + this.apiDates
    return this.http.get(genreURL);
  }
  GetGames():Observable<any>//https://api.rawg.io/api/genres?key=3985949fbafd4cb7886824d9dd809ad8&dates=2019-09-01,2019-09-30&page_size=40
  {
    let gamesURL = "https://api.rawg.io/api/games" + this.apiKey + this.apiDates +"&page_size=40"

    // this only gets the first 40 games but has the addres for the next 40 included
    return this.http.get(gamesURL);
  }
  SetGamesSearch(search:String):Observable<any>
  {
    let gamesURL = "https://api.rawg.io/api/games" + this.apiKey + this.apiDates +"&search="+search
    // this only gets the first 40 games but has the addres for the next 40 included
    console.log(gamesURL)
    return this.http.get(gamesURL);
  }
}