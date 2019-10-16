import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { valideteEmail, validetePassword } from '../helpers/validateInputs.helper';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../services/auth.service'
import { SesionService } from '../services/sesion.service.service'
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
    private sesion : SesionService,
    public alertController: AlertController,
    private auth: AuthService,
    private router: Router
  ) {}
  submit(){
    if(this.errorEmail() 
    &&this.errorPassword()){
    this.auth.getInfoService(this.User)
      .subscribe(e=>{ 
        if(!e.empty){
          this.User.id = e.docs[0].id
          localStorage.setItem("User",JSON.stringify(this.User))
          this.sesion.toggle()
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
