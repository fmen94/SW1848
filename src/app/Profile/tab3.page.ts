import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{

  User: User ={}
  id: string
  constructor(
    public auth: AuthService,
    private router: Router
    ) {}
  updateUser(){
    setInterval(()=>{ 
      this.auth.updateUserService(this.id) 
    }, 10000);
  }
  ngOnInit() {
    
    if(localStorage.getItem("User")){
      this.User= JSON.parse( localStorage.getItem("User"))
      this.id =this.User.id
      this.updateUser()
    }
    else {
      this.router.navigate(['/Home/Profile'])
    }
    
     this.auth.loginService(this.User.id)
     .subscribe(e=>{
        this.User = e
      })
      
     
  }
  

}
