import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-emp',
  templateUrl: './create-emp.component.html',
  styleUrls: ['./create-emp.component.css']
})
export class CreateEmpComponent {

  signUpForm! : FormGroup

  constructor(){

  }
  @Output()
  emitempdata:EventEmitter<FormGroup> = new EventEmitter();


  ngOnInit(): void {
    this.createRegistrationForm();
   // this.createRegistrationFormWithBuilder();
  }

  createRegistrationForm(){
     this.signUpForm = new FormGroup({
       "firstName":new FormControl('',[Validators.required,Validators.minLength(2),Validators.maxLength(10),Validators.pattern("[a-zA-Z]{2,10}")]),
       "lastName":new FormControl('',[Validators.minLength(2),Validators.maxLength(10)]),
       "mobileNo":new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
       "gender":new FormControl('',[]),
       "email":new FormControl('',[]),
       "Company":new FormControl('',[]),
       "DOB":new FormControl('',[]),
       "Password":new FormControl('',[]),
       "confirmPassword":new FormControl('',[]),

       
      })
  }


  
  save(){
    console.log("form data",this.signUpForm.value);
    // console.log(this.signUpForm);
    this.emitempdata.emit(this.signUpForm.value)
  }
  // createproductdata(){
  //   console.log(this.productobj);
  //   this.emitproductdata.emit(this.productobj)
  //     }
    
reset(){
  this.signUpForm.reset();
}

}
