import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  uname='';
  // constructor(private user:UserserviceService){
  //   this.uname=this.user.uname;

  // }
  ngOnInit(): void {

  }
  username: string='';

  constructor(private userService: UserserviceService) {
    this.username = this.userService.getUsername();
  }
}



