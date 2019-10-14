import { Component, OnInit } from '@angular/core';
import { valideteEmail, validetePassword, valideteName } from '../helpers/validateInputs.helper';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit   {

  User: User ={}
  corretEmail : boolean =true
  corretPassword : string | boolean = true
  correctName:  string | boolean = true
  constructor(
    private router: Router
  ) {}
  submit(){
    if(this.errorEmail() 
    &&this.errorPassword() 
    &&this.errorName()){
      console.log("Create en base de datos");
      localStorage.setItem("User",JSON.stringify(this.User))
      //let user = JSON.parse( localStorage.getItem("User"))
      return this.router.navigate(['/Home/Login'])
    } 
    return
  }
  errorEmail(){ 
    return this.corretEmail = valideteEmail(this.User.email)
  }
  errorPassword(){
    return this.corretPassword = validetePassword(this.User.password)
  }
  errorName(){
    return this.correctName = valideteName(this.User.name)
  }
  ngOnInit() {
    localStorage.getItem("User")? 
    this.router.navigate(['/Home/Profile']) : null    
  }
}
