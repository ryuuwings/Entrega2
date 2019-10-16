import { Component } from '@angular/core';
import { ActionSheetController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ApiFruitsService } from '../services/api-fruits.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  constructor(private actionSheetController:ActionSheetController,
    private router:Router, private alertController:AlertController, private apiFruits:ApiFruitsService){

  }
  addFruit(){
    this.router.navigate(["/add-fruit"])
  }
  deleteFruit(){
   this.router.navigate(["/delete-fruit"])
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.deleteFruit()
          console.log('Delete clicked');
        }
      },
       {
        text: 'Add',
        icon: 'add',
        handler: () => {
          this.addFruit()
          console.log('Add clicked');
        }
      }, {
        text: 'Update',
        icon: 'refresh-circle',
        handler: () => {
          this.searchFruit()
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
  async searchFruit(){
    let alert = await this.alertController.create({
      header:"Find",
      message:'ID of the fruit to update',
      inputs: [{name:'fruitToEdit', placeholder:'id'}],
      buttons:[{ text:'Cancel', role:'cancel'},
      {
        text: 'Find', handler:data =>{
          this.router.navigate(["/update-fruit",data.fruitToEdit])
        }
      }
    ]
    });
    alert.present();
  }
}