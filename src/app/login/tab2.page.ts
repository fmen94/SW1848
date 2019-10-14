import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { valideteEmail, validetePassword } from '../helpers/validateInputs.helper';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  User: User ={}
  corretEmail : boolean =true
  corretPassword : string | boolean = true
  correctName:  string | boolean = true
  constructor(
    private router: Router
  ) {}
  submit(){
    if(this.errorEmail() 
    &&this.errorPassword()){
      console.log("login en base de datos");
      localStorage.setItem("User",JSON.stringify(this.User))
      return this.router.navigate(['/Home/Profile'])
    } 
    return
  }
  errorEmail(){ 
    return this.corretEmail = valideteEmail(this.User.email)
  }
  errorPassword(){
    return this.corretPassword = validetePassword(this.User.password)
  }
  ngOnInit() {
    this.User=
    localStorage.getItem("User")? 
     JSON.parse( localStorage.getItem("User")) : {}
  }

}
