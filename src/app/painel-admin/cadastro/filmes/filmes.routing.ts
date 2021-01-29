import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrudFilmesComponent } from './crud-filmes/crud-filmes.component';
import { CreateComponent } from './create/create.component';
import { ReaderComponent } from './reader/reader.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';

const filmesRoutes: Routes = [
  { path: 'crud-filme', component: CrudFilmesComponent },
  { path: 'filme-create', component: CreateComponent },
  { path: 'filme-reader', component: ReaderComponent },
  { path: 'filme-update/:id', component: UpdateComponent },
  { path: 'filme-delete/:id', component: DeleteComponent },
];

@NgModule({
  imports: [RouterModule.forChild(filmesRoutes)],
  exports: [RouterModule]
})
export class FilmesRoutingModule { }
