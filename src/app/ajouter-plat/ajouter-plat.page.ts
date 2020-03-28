import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import{PlatService} from'src/app/Service/plat.service'
import {Plat} from 'src/app/Models/plat'; 
import { Router } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-ajouter-plat',
  templateUrl: './ajouter-plat.page.html',
  styleUrls: ['./ajouter-plat.page.scss'],
})
export class AjouterPlatPage implements OnInit {
  ajoutplatForm: FormGroup; 
  constructor(private formBuilder: FormBuilder, 
    private service: PlatService, 
    private route: Router ) { }
  
  ngOnInit() {
    this.ajoutplatForm = this.formBuilder.group(
      { 'nom' : [null, [Validators.required,Validators.minLength(3)]], 
        'prix' : [null, [Validators.required]], 
        'description' : [null, [Validators.required]] });
      }

      Ajouter(platInfo: Plat) 
      {
           this.service.postPlat(platInfo).subscribe(data=>{
            this.route.navigateByUrl('ajouterplats'); },
       )
  }
  }

 

