import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  email;
  password;
  signupForm;

  constructor(
    private formBuilder: FormBuilder,
  ) {

    this.signupForm = this.formBuilder.group({
      email: '',
      password: ''
    });
  }


  onSubmit(signupData) {
    
    this.signupForm.reset();
  }
  ngOnInit() {
  }

}
