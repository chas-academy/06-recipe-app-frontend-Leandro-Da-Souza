import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  recepies = [
    'Spicy MeatBall',
    'Fideo con Tuco',
    'Pompom Famous Chili',
    'Lasanga',
    'Cheeseburger',
    'Eel',
    'Human'
  ]

  constructor(private http: HttpClient) { }

  getRecepies = () => {
    return this.recepies;
  }

}
