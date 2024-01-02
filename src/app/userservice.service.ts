import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  [x: string]: any;
uname='';
  // username='mike';
  constructor() { }
  getdata(){
    return{
      name:'sam',
      age:35,
      id:100
    }
  }
   username: string='';


  setUsername(username: string) {
    this.username = username;
  }

  getUsername() {
    return this.username;
  }

}
