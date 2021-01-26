import { CreateComponent } from './create/create.component';
import { CrudFilmesComponent } from './crud-filmes/crud-filmes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReaderComponent } from './reader/reader.component';

const filmesRoutes: Routes = [
  {path:'crud-filme', component: CrudFilmesComponent},
  {path:'filme-create', component: CreateComponent},
  {path:'filme-reader', component: ReaderComponent}
];

@NgModule({
  imports: [RouterModule.forChild(filmesRoutes)],
  exports: [RouterModule]
})
export class FilmesRoutingModule { }
