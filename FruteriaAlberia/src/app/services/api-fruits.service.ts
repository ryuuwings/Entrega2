import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Fruit{
  id: number
  name: String
  price: number
}
@Injectable({
  providedIn: 'root'
})
export class ApiFruitsService {

  constructor(private http: HttpClient) { }
  getFruits(){
    return this.http.get("http://localhost:8080/api/fruits");
  }
  addFruit(Fruit){
    return this.http.post("http://localhost:8080/api/newfruit", null, {params:Fruit});
  }
  deleteFruit(id){
    return this.http.delete("http://localhost:8080/api/fruits/" +id)
  }
  updateFruit(Fruit){
    return this.http.put("http://localhost:8080/api/fruits/"+Fruit.id, null, {params:Fruit})
  }
  searchFruit(id){
    return this.http.get("http://localhost:8080/api/fruits/"+id)
  }
  getOneFruit(id){
    return this.http.get("http://localhost:8080/api/fruits/"+id)
  }
}
