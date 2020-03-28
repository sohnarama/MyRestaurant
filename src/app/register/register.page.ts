import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { AuthService } from 'src/app/service/auth.service'; 
import { Utilisateur } from 'src/app/Models/utilisateur'; 
import { Router } from '@angular/router';
// import { UtilsService } from 'src/app/utils.sexrvice';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit 
{
  registerForm: FormGroup; 
  constructor(private formBuilder: FormBuilder, 
    private service: AuthService, 
    private route: Router ) { }
   // private utils: UtilsService) { } 
    ngOnInit() { 
      this.registerForm = this.formBuilder.group(
        { 'username' : [null, [Validators.required,Validators.minLength(3)]], 
          'email' : [null, [Validators.required,Validators.email]], 
          'password' : [null, [Validators.required]] });
        }
    register(userInfo: Utilisateur) 
    {
         this.service.register(userInfo).subscribe(data=>{
          this.route.navigateByUrl('login'); },
     )
}
}
