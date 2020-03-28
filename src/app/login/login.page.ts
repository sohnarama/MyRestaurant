import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service'; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 
import { Router } from '@angular/router'; 
import { Utilisateur } from '../Models/utilisateur';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
 
  loginForm: FormGroup; 
  constructor(private service : AuthService, 
     private formBuilder: FormBuilder, 
   
     private route : Router) { } 
     ngOnInit() { 
       this.loginForm = this.formBuilder.group(
         {
         'identifier' : [null, [Validators.required,Validators.email]],
          'password' : [null, [Validators.required]] }); } 
          
          login(userInfo : any) {
             console.log(this.service.redirectUrl);
              this.service.login(userInfo).subscribe(data=>{ 
                window.localStorage.setItem('token',data.jwt); 
                this.route.navigateByUrl(this.service.redirectUrl); },
               )
            }

          }
          