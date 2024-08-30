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
    path: 'cadastrar-funcionario',
    loadChildren: () => import('./cadastrar-funcionario/cadastrar-funcionario.module').then( m => m.CadastrarFuncionarioPageModule)
  },  
  {
    path: 'excluir-funcionario',
    loadChildren: () => import('./excluir-funcionario/excluir-funcionario.module').then( m => m.ExcluirFuncionarioPageModule)
  },
  {
    path: 'atualizar-funcionario',
    loadChildren: () => import('./atualizar-funcionario/atualizar-funcionario.module').then( m => m.AtualizarFuncionarioPageModule)
  },
  {
    path: 'listar-funcionario',
    loadChildren: () => import('./listar-funcionario/listar-funcionario.module').then( m => m.ListarFuncionarioPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
