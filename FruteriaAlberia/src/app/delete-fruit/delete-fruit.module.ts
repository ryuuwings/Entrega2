import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DeleteFruitPage } from './delete-fruit.page';

const routes: Routes = [
  {
    path: '',
    component: DeleteFruitPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DeleteFruitPage]
})
export class DeleteFruitPageModule {}
