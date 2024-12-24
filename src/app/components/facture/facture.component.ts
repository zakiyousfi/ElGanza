import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css']
})
export class FactureComponent implements OnInit {
  T = JSON.parse(localStorage.getItem("achat") || "[]")
  facture:any={}
  id:any;
  constructor(private activatedRoute:ActivatedRoute) { }
 
  ngOnInit() {
    this.id=this.activatedRoute.snapshot.paramMap.get("id")
    for (let i = 0; i < this.T.length; i++) {
     if (this.T[i].id==this.id) {
      this.facture=this.T[i]
     }
      
    }
  }

}
