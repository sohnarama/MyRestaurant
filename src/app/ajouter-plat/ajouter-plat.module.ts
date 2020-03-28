import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjouterPlatPageRoutingModule } from './ajouter-plat-routing.module';

import { AjouterPlatPage } from './ajouter-plat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AjouterPlatPageRoutingModule
  ],
  declarations: [AjouterPlatPage]
})
export class AjouterPlatPageModule {}
