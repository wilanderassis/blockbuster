import { ReaderComponent } from './painel-admin/cadastro/filmes/reader/reader.component';
import { BoasVindasComponent } from './painel-admin/cadastro/templates/boas-vindas/boas-vindas.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: BoasVindasComponent },
  { path: '', component: ReaderComponent },
  { path: '', component: BoasVindasComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
