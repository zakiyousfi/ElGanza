import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  goToHomme(category:string){
    this.router.navigate(["car/"+category])
  }
  
  goToFemme(category:string){
    this.router.navigate(["car/"+category])
  }
  
}
