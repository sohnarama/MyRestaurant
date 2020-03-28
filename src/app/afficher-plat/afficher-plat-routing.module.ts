import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AfficherPlatPage } from './afficher-plat.page';

const routes: Routes = [
  {
    path: '',
    component: AfficherPlatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AfficherPlatPageRoutingModule {}
