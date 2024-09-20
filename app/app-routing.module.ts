import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'auth',loadChildren:()=>import('./auth/auth.module').then(h=>h.AuthModule)},
  {path:'',loadChildren:()=>import('./home/home.module').then(h1=>h1.HomeModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
