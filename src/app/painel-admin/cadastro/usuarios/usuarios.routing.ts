import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const usuariosRoutes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(usuariosRoutes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
