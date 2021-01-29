import { LoginComponent } from './login/login.component';
import { PrincipalComponent } from './principal/principal.component';
import { ReaderComponent } from './painel-admin/cadastro/filmes/reader/reader.component';
import { BoasVindasComponent } from './painel-admin/cadastro/templates/boas-vindas/boas-vindas.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'principal', component: PrincipalComponent },
  { path: 'filmes', loadChildren: 'app/painel-admin/cadastro/filmes/filmes.module#FilmesModule' },
  //{ path: '', component: BoasVindasComponent },
  // { path: '', component: ReaderComponent },
  //{ path: '', component: BoasVindasComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
