import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../menu/menu.module').then(m => m.Tab1PageModule)
          }
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../plat/plat.module').then(m => m.Tab2PageModule)
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../compte/compte.module').then(m => m.Tab3PageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  },

  { 
    path: 'login', 
    
    children: [ { path: '', loadChildren: () =>
    
     import('../login/login.module').then(m => m.LoginPageModule) },
   ] 
  },
  
  { 
    path: 'register', 
    children: [ { path: '', loadChildren: () =>
    
     import('../register/register.module').then(m => m.RegisterPageModule) },
   ] 
  },
  
  { 
  path: 'ajouterplats', 
 canActivate: [AuthGuard],
  children: [ { path: '', loadChildren: () =>
  
   import('../ajouter-plat/ajouter-plat.module').then(m => m.AjouterPlatPageModule) },
 ] 
},
{ path: 'modifierplat',
canActivate: [AuthGuard],
 children: [ { path: '/:id', loadChildren: () => 
 import('../modifier-plat/modifier-plat.module').then(m => m.ModifierPlatPageModule ) } ] 
},
{
  path: 'afficher-profil',
  loadChildren: () => import('../afficher-profil/afficher-profil.module').then( m => m.AfficherProfilPageModule)
},
{
  path: 'passer-commande',
  loadChildren: () => import('../passer-commande/passer-commande.module').then( m => m.PasserCommandePageModule)
}

]
;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
