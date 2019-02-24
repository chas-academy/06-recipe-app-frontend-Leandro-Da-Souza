import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecepiesComponent } from './recepies/recepies.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'recepies',
    component: RecepiesComponent
  },
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
