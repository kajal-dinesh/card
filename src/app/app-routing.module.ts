import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddprofileComponent } from './addprofile/addprofile.component';
import { AuthGuardGuard } from './auth-guard.guard';
import { HomeComponent } from './home/home.component';
import { ViewComponent } from './view/view.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'view/:id',component:ViewComponent},
  {path:'addprofile',component:AddprofileComponent,canActivate:[AuthGuardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
