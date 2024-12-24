import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-achat',
  templateUrl: './achat.component.html',
  styleUrls: ['./achat.component.css']
})
export class achatComponent implements OnInit {
  T:any=[{id:1,img:"../../assets/images/car/femme1.png",Category:"Femme",name:"EB ELEKTRO",prix:170,Des:"",gps:"no",Sbebe:"no",Chf:"no",Statut:"no"},
  {id:2,img:"../../assets/images/car/homme1.png",Category:"Homme",name:"defender",prix:150,Des:"",gps:"no",Sbebe:"no",Chf:"no",Statut:"no"},
  {id:3,img:"../../assets/images/car/femme2.png",Category:"Femme",name:"peugeot 108",prix:110,Des:"",gps:"no",Sbebe:"no",Chf:"no",Statut:"no"},
  {id:4,img:"../../assets/images/car/femme3.png",Category:"Femme",name:"panamera",prix:150,Des:"",gps:"no",Sbebe:"no",Chf:"no",Statut:"no"},
  {id:5,img:"../../assets/images/car/homme2.png",Category:"Homme",name:"serie1",prix:320,Des:"",gps:"no",Sbebe:"no",Chf:"no",Statut:"no"},
  ]
  id: any;
  car: any = {};
  achatForm!: FormGroup;
  constructor(private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder,private router:Router) { }

  ngOnInit() {
    this.achatForm = this.formBuilder.group({
      img: [''],
      nom: [''],
      prenom: [''],
      age: [''],
      tel: [''],
      CIN: [''],
      email: [''],
      modeDePayement: [''],
    })

    if (JSON.parse(sessionStorage.getItem("user") ?? "null")) {
      this.id =this.activatedRoute.snapshot.paramMap.get("id");
      for (let i = 0; i < this.T.length; i++) {
        if (this.T[i].id == this.id) {
          this.car = this.T[i];
          console.log("Imen", this.T[i]);
        }
      }
    }
    else {
      this.router.navigate(["signup"])
    }
  }
  updateField(fieldName: string) {
    const fieldValue = this.achatForm.value[fieldName];

    console.log('Before:', fieldValue);

    let newValue: string;

    if (fieldValue === 'no') {
        newValue = 'yes';
    } else {
        newValue = 'no';
    }

    this.achatForm.value[fieldName] = newValue;

    console.log('After:', this.achatForm.value[fieldName]);
}

achat(){
  let user = JSON.parse(sessionStorage.getItem("user") || "[]")
  this.achatForm.value.userId = user.id
  this.achatForm.value.carId = this.car.id
  this.achatForm.value.img = this.car.img
  this.achatForm.value.name = this.car.name
  this.achatForm.value.prix = this.car.prix
  this.achatForm.value.Category = this.car.Category
  let achat = JSON.parse(localStorage.getItem("achat") || "[]")
  let id = this.generateId(achat)
  this.achatForm.value.id = id
  achat.push(this.achatForm.value)
  localStorage.setItem('achat', JSON.stringify(achat))
  console.log(this.achatForm.value);
  this.router.navigate(["dashboard/"+user.id])
}
generateId(T: any){
  if (T.length === 0) {
    return 1
  }
  else {
    let max = 0
    for (let i = 0; i < T.length; i++) {
      if (max < T[i].id) {
        max = T[i].id
      }
    }
    return max + 1
  }
}
}

