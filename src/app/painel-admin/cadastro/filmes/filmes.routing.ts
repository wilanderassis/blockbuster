import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const filmesRoutes: Routes = [
];

@NgModule({
  imports: [RouterModule.forChild(filmesRoutes)],
  exports: [RouterModule]
})
export class FilmesRoutingModule { }
