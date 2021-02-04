import { LoginSiteComponent } from './site/views/login-site/login-site.component';
import { PrincipalSiteComponent } from './site/views/principal-site/principal-site.component';
import { DeleteUsuarioComponent } from './painel-admin/cadastro/usuarios/delete-usuario/delete-usuario.component';
import { UpdateUsuarioComponent } from './painel-admin/cadastro/usuarios/update-usuario/update-usuario.component';
import { CreateUsuarioComponent } from './painel-admin/cadastro/usuarios/create-usuario/create-usuario.component';
import { CrudUsuariosComponent } from './painel-admin/cadastro/usuarios/crud-usuarios/crud-usuarios.component';
import { DeleteComponent } from './painel-admin/cadastro/filmes/delete/delete.component';
import { UpdateComponent } from './painel-admin/cadastro/filmes/update/update.component';
import { CrudFilmesComponent } from './painel-admin/cadastro/filmes/crud-filmes/crud-filmes.component';
import { BoasVindasComponent } from './painel-admin/cadastro/templates/boas-vindas/boas-vindas.component';
import { LoginComponent } from './login/login.component';
import { PrincipalComponent } from './principal/principal.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './painel-admin/cadastro/filmes/create/create.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
 /*  { path: '', component: PrincipalSiteComponent },
  { path: 'logar', component: LoginSiteComponent }, */

  { path: '', component: LoginComponent },
  {
    canActivate: [AuthGuard],
    path: 'principal', component: PrincipalComponent, children: [
      { path: '', component: BoasVindasComponent },
      { path: 'crud-filme', component: CrudFilmesComponent },
      { path: 'create-filme', component: CreateComponent },
      { path: 'update-filme/:id', component: UpdateComponent },
      { path: 'delete-filme/:id', component: DeleteComponent },
      { path: 'crud-usuario', component: CrudUsuariosComponent },
      { path: 'create-usuario', component: CreateUsuarioComponent },
      { path: 'update-usuario/:id', component: UpdateUsuarioComponent },
      { path: 'delete-usuario/:id', component: DeleteUsuarioComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
