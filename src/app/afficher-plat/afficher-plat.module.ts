import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AfficherPlatPageRoutingModule } from './afficher-plat-routing.module';

import { AfficherPlatPage } from './afficher-plat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AfficherPlatPageRoutingModule
  ],
  declarations: [AfficherPlatPage]
})
export class AfficherPlatPageModule {}
