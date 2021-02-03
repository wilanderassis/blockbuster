import { ReaderUsuarioComponent } from './reader-usuario/reader-usuario.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { UsuariosRoutingModule } from './usuarios.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudUsuariosComponent } from './crud-usuarios/crud-usuarios.component';
import { CreateUsuarioComponent } from './create-usuario/create-usuario.component';
import { UpdateUsuarioComponent } from './update-usuario/update-usuario.component';
import { DeleteUsuarioComponent } from './delete-usuario/delete-usuario.component';



@NgModule({
  declarations: [
    CrudUsuariosComponent,
    CreateUsuarioComponent,
    ReaderUsuarioComponent,
    UpdateUsuarioComponent,
    DeleteUsuarioComponent],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    FormsModule,
    NgxPaginationModule,
    Ng2OrderModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule
  ]
})
export class UsuariosModule { }
