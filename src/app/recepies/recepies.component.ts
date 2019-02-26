import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api.service";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recepies',
  templateUrl: './recepies.component.html',
  styleUrls: ['./recepies.component.css']
})
export class RecepiesComponent implements OnInit {

  recepies = [];

  constructor(private api: ApiService) { }

  ngOnInit() {

    console.log(this.api.getRecepies());
    this.api.getRecepies().subscribe(data => {
      this.recepies = data.meals;
    });

  }

  

}
