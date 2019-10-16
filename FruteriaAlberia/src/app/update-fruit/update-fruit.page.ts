import { Component, OnInit } from '@angular/core';
import { ApiFruitsService, Fruit } from '../services/api-fruits.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-update-fruit',
  templateUrl: './update-fruit.page.html',
  styleUrls: ['./update-fruit.page.scss'],
})
export class UpdateFruitPage {

  fruit: Fruit;
  constructor(private router:Router, private apiFruits:ApiFruitsService, private alertController:AlertController, private route:ActivatedRoute) {
    let id =this.route.snapshot.paramMap.get('id');
    this.apiFruits.getOneFruit(id).subscribe((res: Fruit)=>{
      this.fruit = res;
    }, (err)=>{
      console.log(err)
    })
  }
  goBack(){
    this.router.navigate(["/tabs/tab3"])
  }
  updateFruit(){
    var name = (document.getElementById("name") as HTMLIonInputElement).value;
    var price = (document.getElementById("price") as HTMLIonInputElement).value;
    var Fruit:Fruit;
    Fruit = {
      id:this.fruit.id,
      name: name.toString(),

      price: parseFloat(price)
    }
    if(Fruit.name !="" && Fruit.price !=null){
    this.apiFruits.updateFruit(Fruit).subscribe((res)=>{
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

