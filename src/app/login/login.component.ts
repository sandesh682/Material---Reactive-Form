import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormBuilder,Validator, Validators} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup ;

  constructor(private formbuilder:FormBuilder) {
    this.loginForm = formbuilder.group({
        email: new FormControl('',[Validators.required,Validators.email]),
        password: new FormControl('',[Validators.required,Validators.minLength(6)]),
        phone: new FormControl('',[Validators.required,Validators.minLength(10)])
    })
   }

  ngOnInit() {
  }

  onLogin(loginForm){
    console.log('Hello.....!')
  }

}
