import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AfficherProfilPageRoutingModule } from './afficher-profil-routing.module';

import { AfficherProfilPage } from './afficher-profil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AfficherProfilPageRoutingModule
  ],
  declarations: [AfficherProfilPage]
})
export class AfficherProfilPageModule {}
