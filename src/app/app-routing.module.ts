import { ClientesComponent } from './clientes/clientes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { PainelUsuarioComponent } from './painel-usuario/painel-usuario.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent
}, {
  path: 'cadastro',
  component: CadastroComponent
}, {
  path: 'clientes',
  component: ClientesComponent

}, {
  path: 'painel-usuario',
  component: PainelUsuarioComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
