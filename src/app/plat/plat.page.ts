import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { PlatService } from '../Service/plat.service';
import { Plat } from '../Models/plat';

import { AjouterPlatPage } from '../ajouter-plat/ajouter-plat.page';
@Component({
  selector: 'app-plat',
  templateUrl: 'plat.page.html',
  styleUrls: ['plat.page.scss']
})
export class tab2Page {
    plats : Plat []; 
    constructor(private route : Router, private api : PlatService) 
    {
      this.api.getPlats().subscribe(data=>{ this.plats=data;
      })
       console.log(this.plats);
    } 

    modifierPlat (id:any):void {
       this.route.navigate(['tabs/plats/modifier',id]); 
      } 
    getPlats() : void {
       this.api.getPlats().subscribe(Response=>{ this.plats = Response; }); 
      } 
    delete(plat:Plat):void
    { 
      this.api.deletePlat(plat.id).subscribe(plat =>{ this.getPlats(); });
    } 


}


