import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alert } from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http:HttpClient) { }

  // data needed to construct the api call
  private apiKey:String = "?key=a50e7cb444614ac3a30bb6c2ed522a97"
  public startDate:String = "1950-09-01"
  public endDate = "2022-05-01"
  private apiDates = "&dates="+this.startDate+","+this.endDate

  // get genres method returns a basic get games call from the api. not used
  GetGenres():Observable<any>
  {
    let genreURL="https://api.rawg.io/api/genres" + this.apiKey + this.apiDates
    return this.http.get(genreURL);
  }
  //get games makes a basic call to the api with no data and returns the start of the api and the top rated games
  GetGames():Observable<any>
  {
    let gamesURL = "https://api.rawg.io/api/games" + this.apiKey + this.apiDates +"&page_size=40"
    // this only gets the first 40 games but has the address for the next 40 included
    return this.http.get(gamesURL);
  }
  GetNextGames(url:String):Observable<any>
  {
    let gamesURL = url.toString();
    return this.http.get(gamesURL);
  }
  //game search takes a parameter and passes that to the call for the search, returns a list of games with that search.
  SetGamesSearch(search:String):Observable<any>
  {
    let gamesURL = "https://api.rawg.io/api/games" + this.apiKey + this.apiDates +"&search="+search
    // this only gets the first 40 games but has the address for the next 40 included
    console.log(gamesURL)
    return this.http.get(gamesURL);
  }
  // slight change on the method above and only returns the top most instance by using the &page_size=1 part of the call.
  SetGamesSearchOne(search:String):Observable<any>
  {
    let gamesURL = "https://api.rawg.io/api/games" + this.apiKey + this.apiDates +"&search="+search+"&page_sixe=1"
    console.log(gamesURL)
    return this.http.get(gamesURL);
  }
}