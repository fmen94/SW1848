import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{

  User: User ={}
  constructor() {}
  ngOnInit() {
    this.User=
    localStorage.getItem("User")? 
     JSON.parse( localStorage.getItem("User")) : {}
  }

}
