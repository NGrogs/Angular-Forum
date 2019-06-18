import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  user: firebase.User;

  constructor(db: AngularFirestore, 
    private afAuth: AngularFireAuth,
    private loginService: LoginService) {
    
  }

  ngOnInit() {
    this.afAuth.authState
      .subscribe( user => {
        this.user = user;
      })
  }
}
