import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReaderComponent } from './reader/reader.component';

const usuariosRoutes: Routes = [
  {path:'usuario-reader', component: ReaderComponent}
];

@NgModule({
  imports: [RouterModule.forChild(usuariosRoutes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
