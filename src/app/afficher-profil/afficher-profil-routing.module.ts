import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AfficherProfilPage } from './afficher-profil.page';

const routes: Routes = [
  {
    path: '',
    component: AfficherProfilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AfficherProfilPageRoutingModule {}
