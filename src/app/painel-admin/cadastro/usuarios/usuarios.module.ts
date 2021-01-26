import { UsuariosRoutingModule } from './usuarios.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { ReaderComponent } from './reader/reader.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';



@NgModule({
  declarations: [
    CreateComponent,
    ReaderComponent,
    UpdateComponent,
    DeleteComponent],
  imports: [
    CommonModule,
    UsuariosRoutingModule
  ],
  exports: [
    ReaderComponent
  ]
})
export class UsuariosModule { }
