import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiFruitsService, Fruit } from '../services/api-fruits.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-add-fruit',
  templateUrl: './add-fruit.page.html',
  styleUrls: ['./add-fruit.page.scss'],
})
export class AddFruitPage {

  constructor(private alertController:AlertController, private router:Router, private apiFruits:ApiFruitsService) { 

  }
  goBack(){
    this.router.navigate(["/tabs/tab3"])
  }
  addFruit(){
    var name = (document.getElementById("name") as HTMLIonInputElement).value;
    var price = (document.getElementById("price") as HTMLIonInputElement).value;
    var Fruit:Fruit;
    Fruit = {
      id:0,
      name: name.toString(),

      price: parseFloat(price)
    }
    if(Fruit.name != "" && Fruit.price!=null){
    this.apiFruits.addFruit(Fruit).subscribe((res)=>{
      console.log(Fruit)
    })
    } else{
      let alert = this.alertController.create({
        header:"Error",
        message:'You have not imputed the name or price'
    })
  }
  }
}
