import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [

  {path:"home", component: HomeComponent},
  {path:"", component: HomeComponent},
  {path:"login", component :LoginComponent},
  {path:"404",component: NotFoundComponent},
  {path:"**",pathMatch:"full",redirectTo:"404"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
