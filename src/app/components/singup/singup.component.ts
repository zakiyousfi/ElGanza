import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

  signupForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,private router:Router) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      firstName: ['',[Validators.required, Validators.minLength(3)]],
      lastName: ['',[Validators.required, Validators.minLength(3)]],
      email: ['',[Validators.email]],
      pwd: [''],
    })
  }
  signup(){
    let users = JSON.parse(localStorage.getItem("users") || "[]")
    let id= this.generateId(users)
    this.signupForm.value.id=id
    users.push(this.signupForm.value)
    localStorage.setItem('users',JSON.stringify(users))
    console.log(this.signupForm.value);
    this.router.navigate(["/login"])
  }
  generateId(users:any){
    if (users.length===0) {
      return 1
    }
    else{
      let max =0 
      for (let i = 0; i < users.length; i++) {
        if (max < users[i].id){
          max = users[i].id
        }
      }
      return max + 1
    }
  }

}
