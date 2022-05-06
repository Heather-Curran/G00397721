import { Component, OnInit, Input } from '@angular/core';
import { APIService } from '../../Services/api.service'

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss'],
})
export class GameCardComponent implements OnInit {

  @Input() public Title:String;
  @Input() public Rating:String;
  @Input() public PlayTime:String;
  @Input() public SRC:String;
  @Input() public Genres:String[]

  constructor() { }

  ngOnInit() 
  {
    
  }
}
