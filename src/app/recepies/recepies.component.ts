import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api.service";

@Component({
  selector: 'app-recepies',
  templateUrl: './recepies.component.html',
  styleUrls: ['./recepies.component.css']
})
export class RecepiesComponent implements OnInit {

  recepies = []

  constructor(private api: ApiService) { }

  ngOnInit() {

    this.recepies = this.api.getRecepies();

  }

  

}
