import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{

  User: User ={}
  constructor(private db: AngularFirestore) {}
  getUsers = this.db.collection('User').valueChanges();
  ngOnInit() {
    this.getUsers.subscribe(e=>{console.log(e);
    })
    this.User=
    localStorage.getItem("User")? 
     JSON.parse( localStorage.getItem("User")) : {}
  }

}
