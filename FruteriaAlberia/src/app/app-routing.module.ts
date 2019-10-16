import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'add-fruit', loadChildren: './add-fruit/add-fruit.module#AddFruitPageModule' },
  { path: 'delete-fruit', loadChildren: './delete-fruit/delete-fruit.module#DeleteFruitPageModule' },
  { path: 'update-fruit/:id', loadChildren: './update-fruit/update-fruit.module#UpdateFruitPageModule' }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
