import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  constructor(private formBuilder: FormBuilder,private router:Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [''],
      pwd: [''],
    })
  }
  login(){
    let users = JSON.parse(localStorage.getItem("users") || "[]")
    for (let i = 0; i < users.length; i++) {
    if ((users[i].email==this.loginForm.value.email)&&(users[i].pwd==this.loginForm.value.pwd)) {
      let user:any={}=users[i]
      sessionStorage.setItem('user',JSON.stringify(user))
      this.router.navigate(["/store"])
    }
      
    }
  }
}

