import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



const url = "https://www.themealdb.com/api/json/v1/1/search.php?s";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // recepies = [
  //   'Spicy MeatBall',
  //   'Fideo con Tuco',
  //   'Pompom Famous Chili',
  //   'Lasanga',
  //   'Cheeseburger',
  //   'Eel',
  //   'Human'
  // ]

  constructor(private http: HttpClient) { }

  getRecepies = () => {
    return this.http.get<any>(url);
  }



}
