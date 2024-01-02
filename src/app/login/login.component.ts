import { Component } from '@angular/core';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
uname='';
  
// constructor(private user:UserserviceService){
//   this.uname=this.user.uname;
// }
save(form:any){
  console.log("form value",form.value);
}

username: string='';

constructor(private userService: UserserviceService) {}

login() {
  this.userService['setUsername'](this.username);
}
}


