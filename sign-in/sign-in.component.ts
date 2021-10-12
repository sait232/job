import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  passwordPattern:string="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$";
  emailpattern:string="^[a-zA-Z0-9.!#$%&amp;'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$";
  loginForm:any=FormGroup;
  //toggle 
  isActive:boolean=false;
  constructor(private _fb:FormBuilder) { }

  toggle1(){
    this.isActive=!this.isActive;
  }
  ngOnInit(): void {
    // this.createForm();
  }
createForm(){
 this.loginForm=this._fb.group(
   {
    'Email':new FormControl('',[Validators.required,Validators.pattern(this.emailpattern)]),
    'Password':new FormControl('',[Validators.required,Validators.pattern(this.passwordPattern)]),
   }
 )
}
public getEmail(){
  return this.loginForm.get('Email');
}
public getPassword(){
  return this.loginForm.get('Password');
}
}
