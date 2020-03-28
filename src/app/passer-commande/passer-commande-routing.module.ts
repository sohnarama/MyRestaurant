import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PasserCommandePage } from './passer-commande.page';

const routes: Routes = [
  {
    path: '',
    component: PasserCommandePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PasserCommandePageRoutingModule {}
