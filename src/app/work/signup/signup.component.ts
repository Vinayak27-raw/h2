import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/event/authenticator.service';

 
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
 
  registerForm:FormGroup;
 

  constructor(private builder:FormBuilder, private authService : AuthService){}
  
  //using Form Builder
  ngOnInit(): void {
    this.registerForm = this.builder.group({
      username:[null,[Validators.required,Validators.minLength(3)]],
      password:[null,Validators.required]
    });
  } 

  onSubmit(){
    
    const signupData = this.registerForm.value;
  
    this.authService.signup(signupData).subscribe(data=>{
      console.log(data);
    });
  }
  }



  

