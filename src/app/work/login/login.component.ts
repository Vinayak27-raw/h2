import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/event/authenticator.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup; 
  

  constructor(private builder:FormBuilder, private authService : AuthService){}
  
  //using Form Builder 
  ngOnInit(): void {
    this.loginForm = this.builder.group({
      
      username:[null,[Validators.required]],
      password:[null,Validators.required]
    });
  }

  onSubmit(){
   
    const loginData = this.loginForm.value;
    this.authService.login(loginData).subscribe(data=>{
      console.log(data);
    });
  }
}