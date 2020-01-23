import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AddModelComponent } from './add-model/add-model.component';
import { ViewInventoryComponent } from './view-inventory/view-inventory.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'addModel', component: AddModelComponent},
  { path: 'inventoryDetails', component: ViewInventoryComponent},
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
