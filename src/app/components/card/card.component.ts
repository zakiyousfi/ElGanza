import { Component, OnInit , Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() x:any;
  constructor(private router:Router) { }

  ngOnInit() {
  }
  achat(id:any){
    this.router.navigate(["achat/"+id])
  }

}
