import { Component, OnInit } from '@angular/core';
import { valideteEmail, validetePassword, valideteName } from '../helpers/validateInputs.helper';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service'
import { AlertController } from '@ionic/angular';

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
    public alertController: AlertController,
    private router: Router,
    private auth :AuthService
  ) {}
  submit(){
    if(this.errorEmail() 
    &&this.errorPassword() 
    &&this.errorName()){
      this.auth.sginUpService(this.User).subscribe(e=>{
        if(e.empty){
          return this.auth.createUserService(this.User)
          .then(e=>{
               this.User.id= e.id
               localStorage.setItem("UserCreated",JSON.stringify(this.User))
               return this.router.navigate(['/Home/Login'])
         })
        }else {
          this.alertSingIncorrect()
        }
      })
    } 
    return
  }
  async alertSingIncorrect() {
    const alert = await this.alertController.create({
      header: 'Usuario ya exitente',
      message: 'Intente de nuevo',
      buttons: ['OK']
    });
    await alert.present();
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
    if(localStorage.getItem("User")){
      this.router.navigate(['/Home/Profile'])
    } 
  }
}
