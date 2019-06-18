import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: firebase.User;
  email;
  password;
  loginForm;

  constructor(
    private formBuilder: FormBuilder,
    private afAuth: AngularFireAuth,
    private service: LoginService
  ) {

    this.loginForm = this.formBuilder.group({
      email: '',
      password: ''
    });
  }


  onSubmit(loginData) {
    this.loginForm.reset();

    this.service.login(this.email, this.password);
  }

  ngOnInit() {
    this.service.getLoggedInUser()
    .subscribe( user =>{
      this.user = user;
    });
  }

}
