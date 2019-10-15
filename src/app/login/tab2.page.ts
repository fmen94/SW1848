import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { valideteEmail, validetePassword } from '../helpers/validateInputs.helper';
import { AngularFirestore } from '@angular/fire/firestore';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../services/auth.service'
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
  logError: boolean = false
  constructor(
    public alertController: AlertController,
    private auth: AuthService,
    private router: Router
  ) {}
  submit(){
    if(this.errorEmail() 
    &&this.errorPassword()){
    this.auth.loginService(this.User)
      .subscribe(e=>{
        console.log(e);

        if(e.length){
          localStorage.setItem("User",JSON.stringify(e[0]))
          return this.router.navigate(['/Home/Profile'])
        }
        else return this.alertLoginIncorrect()
      })
    } 
    return
  }
  errorEmail(){ 
    return this.corretEmail = valideteEmail(this.User.email)
  }
  errorPassword(){
    return this.corretPassword = validetePassword(this.User.password)
  }
  async alertLoginIncorrect() {
    const alert = await this.alertController.create({
      header: 'Usuario o contraseña incorrecta',
      message: 'Intente de nuevo',
      buttons: ['OK']
    });

    await alert.present();
  }
  ngOnInit() {
    if(localStorage.getItem("User")){
      this.router.navigate(['/Home/Profile'])
    } 
    this.User=
    localStorage.getItem("UserCreated")? 
     JSON.parse( localStorage.getItem("UserCreated")) : {}
  }

}
