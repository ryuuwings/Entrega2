import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiFruitsService } from '../services/api-fruits.service';

@Component({
  selector: 'app-delete-fruit',
  templateUrl: './delete-fruit.page.html',
  styleUrls: ['./delete-fruit.page.scss'],
})
export class DeleteFruitPage implements OnInit {

  constructor(private router:Router, private apiFruits:ApiFruitsService) { }
  goBack(){
    this.router.navigate(["/tabs/tab3"])
  }
  deleteFruit(){
    var id=(document.getElementById("fruitDelete") as HTMLIonInputElement).value;
    this.apiFruits.deleteFruit(id).subscribe((res)=>{
    })
    this.router.navigate(["/tabs/tab1"])
  }

  ngOnInit() {
  }

}
