import { Component, OnInit, HostBinding } from '@angular/core';
import { SesionService } from '../services/sesion.service.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit{

  @HostBinding('class.is-open')
  openSession: boolean = false;
  
  
  constructor(
    public sesion : SesionService,
    public router : Router
  ) {}
  logOut(){
    this.sesion.toggle()
    localStorage.removeItem("User")
    this.router.navigate(['/Home/Login'])
  }
  
  ngOnInit(){
    this.openSession =
    localStorage.getItem("User")?
    true : false
    this.sesion.change.subscribe(e=>{
      this.openSession =e
    })

  }
}
