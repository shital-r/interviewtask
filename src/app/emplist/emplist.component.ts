import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent implements OnInit{
  emplist: any[] = [];
  // employeelist: employee[] = [];

  ngOnInit(): void {
  // this.emplist=this.
  }
  

  getdataFromChild(data:any){
    this.emplist.push(data);

  }
getdata(){

}

delet(){
  
}
}