import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide: boolean = true;
  value: boolean = false;
  constructor(private fb: FormBuilder,private router: Router) { }

  ngOnInit(){
  }

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })
  data :any = [];
  email_id : string = "mittalvedant5@gmail.com";
  password_id : any = "upes@123";
  onLogin() {
    if (!this.loginForm.valid) {
      return;
    }
    console.log(this.loginForm.value);
    this.data = this.loginForm.value;
    if(this.data.email == this.email_id && this.data.password == this.password_id){
      this.value = false;
      let authtoken = '324234jkjew9jr32r@!(!@kn21n1jk21@1';
      localStorage.setItem('token',authtoken);
      this.router.navigate([`${'employees'}`]);
    }
    else{
      this.value = true;
    }
    
  }

  

}

