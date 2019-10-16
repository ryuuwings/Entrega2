import { Component } from '@angular/core';
import { ApiFruitsService, Fruit } from '../services/api-fruits.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  Fruits: Array<Fruit>=[]
  constructor(private apiFruits: ApiFruitsService){
    
  }
  showList(){
    this.apiFruits.getFruits().subscribe((res:Array<Fruit>)=>{
      this.Fruits=res;
      
    })
    var buttonDisable = (document.getElementById("btnList")) as HTMLButtonElement;
    buttonDisable.disabled = true;
    var labels = (document.getElementById("labels")) as HTMLIonLabelElement;
    labels.hidden = false;
    
  }
}
