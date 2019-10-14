import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit{
  openSession: boolean = false
  constructor() {}
  logOut(){
    this.openSession = false
    localStorage.removeItem("User")
  }
  
  ngOnInit(){
    this.openSession =
    localStorage.getItem("User")?
    true : false
  }
}
