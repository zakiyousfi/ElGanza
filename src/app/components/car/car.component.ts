import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  termName: any;
  category:any;
  T:any=[{id:1,img:"../../assets/images/car/femme1.png",Category:"Femme",name:"EB ELEKTRO",prix:170,Des:"",gps:"no",Sbebe:"no",Chf:"no",Statut:"no"},
  {id:2,img:"../../assets/images/car/homme1.png",Category:"Homme",name:"defender",prix:150,Des:"",gps:"no",Sbebe:"no",Chf:"no",Statut:"no"},
  {id:3,img:"../../assets/images/car/femme2.png",Category:"Femme",name:"peugeot 108",prix:110,Des:"",gps:"no",Sbebe:"no",Chf:"no",Statut:"no"},
  {id:4,img:"../../assets/images/car/femme3.png",Category:"Femme",name:"panamera",prix:150,Des:"",gps:"no",Sbebe:"no",Chf:"no",Statut:"no"},
  {id:5,img:"../../assets/images/car/homme2.png",Category:"Homme",name:"serie1",prix:320,Des:"",gps:"no",Sbebe:"no",Chf:"no",Statut:"no"},
  
  ]
  c:any=[];
  constructor(private activatedRoute:ActivatedRoute) { }
  ngOnInit() {
    this.category=this.activatedRoute.snapshot.paramMap.get("category")
    for (let i = 0; i < this.T.length; i++) {
      if (this.T[i].Category==this.category) {
        this.c.push(this.T[i])
      }
    }

  }

}
