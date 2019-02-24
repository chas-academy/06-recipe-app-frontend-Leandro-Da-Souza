import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecepiesComponent } from './recepies/recepies.component';

const routes: Routes = [
  {
    path: 'recepies',
    component: RecepiesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
