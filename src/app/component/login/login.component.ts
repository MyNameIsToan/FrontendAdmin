import { AuthService } from './../../service/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/object/login/login';
import { Users } from 'src/app/object/login/users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  token!: string
  condition_login !: boolean;
  LoginForm!: FormGroup;
  constructor(private AuthService: AuthService, private Router : Router) {
    this.LoginForm = new FormGroup({
      'Email': new FormControl(null),
      'Password': new FormControl(null)
    })
  }

  ngOnInit(): void {
  }

  OnSubmit(){
    this.condition_login = true;
    if(this.LoginForm.invalid){
      console.log('invalid');
      return;
    }
    this.Login();
  }

  Login(){
    var users = new Users();
    users.email = this.LoginForm.controls['Email'].value;
    users.password = this.LoginForm.controls['Password'].value;
    console.log(users);
    this.AuthService.Login(users).subscribe(data=>{
      let value = data as Login;
      this.token = value.data.token;
      localStorage.setItem('token', value.data.token);
    });
    console.log(this.token);
    setTimeout( () => { window.location.href = "http://localhost:4100/news";  }, 3000 );
  }
}
