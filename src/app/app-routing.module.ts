import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'desenvolvedores',
    loadChildren: () => import('./desenvolvedores/desenvolvedores.module').then( m => m.DesenvolvedoresPageModule)
  },  {
    path: 'matheus',
    loadChildren: () => import('./matheus/matheus.module').then( m => m.MatheusPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
