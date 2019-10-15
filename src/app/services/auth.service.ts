import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private db: AngularFirestore
  ) { }

 sginUpService(user:User){
  return  this.db.collection("User",ref=>ref
      .where("name","==",user.name)
      .where("email","==",user.email)).get()
 }
 createUserService(user:User){
   return this.db.collection('User')
   .add(
     {name:user.name,
      password: btoa(user.password),
      email: user.email,

    })
 }
loginService(user:User){
  return this.db.collection("User",ref=>ref
  .where("email","==",user.email)
  .where("password","==",btoa(user.password))).valueChanges()
}



}
