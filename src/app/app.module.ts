import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserserviceService } from './userservice.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { CreateEmpComponent } from './create-emp/create-emp.component';
import { EmplistComponent } from './emplist/emplist.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    CreateEmpComponent,
    EmplistComponent,
    
      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UserserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
