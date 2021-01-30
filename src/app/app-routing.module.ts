import { DeleteComponent } from './painel-admin/cadastro/filmes/delete/delete.component';
import { UpdateComponent } from './painel-admin/cadastro/filmes/update/update.component';
import { CrudFilmesComponent } from './painel-admin/cadastro/filmes/crud-filmes/crud-filmes.component';
import { BoasVindasComponent } from './painel-admin/cadastro/templates/boas-vindas/boas-vindas.component';
import { LoginComponent } from './login/login.component';
import { PrincipalComponent } from './principal/principal.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './painel-admin/cadastro/filmes/create/create.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'principal', component: PrincipalComponent, children: [
      { path: '', component: BoasVindasComponent },
      { path: 'crud-filme', component: CrudFilmesComponent },
      { path: 'create-filme', component: CreateComponent },
      { path: 'update-filme/:id', component: UpdateComponent },
      { path: 'delete-filme/:id', component: DeleteComponent },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
