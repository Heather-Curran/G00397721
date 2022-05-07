import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  public src:String = "https://cdn.w600.comps.canstockphoto.com/letter-h-of-the-alphabet-with-leaves-eps-vectors_csp72857635.jpg"
  public enabled:Boolean = false;
  public name:String = "Heather";

  constructor() { }

  ngOnInit() {
  }

}
