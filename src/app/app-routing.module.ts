import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserserviceService } from './userservice.service';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {component:UserComponent,path:'user'},
  {component:LoginComponent,path:'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
