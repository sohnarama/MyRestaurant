import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   {
     path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  }
  /* ,
   {
    path: 'modifier-plat',
    loadChildren: () => import('./modifier-plat/modifier-plat.module').then( m => m.ModifierPlatPageModule),
  },
  {
    path: 'afficher-profil',
    loadChildren: () => import('./afficher-profil/afficher-profil.module').then( m => m.AfficherProfilPageModule)
  },
  {
    path: 'passer-commande',
    loadChildren: () => import('./passer-commande/passer-commande.module').then( m => m.PasserCommandePageModule)
  }
  ,
  {
    path: 'modifier-plat',
    loadChildren: () => import('./modifier-plat/modifier-plat.module').then( m => m.ModifierPlatPageModule)
  },
  {
    path: 'afficher-plat',
    loadChildren: () => import('./afficher-plat/afficher-plat.module').then( m => m.AfficherPlatPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },  */
 
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
