import { FilmesRoutingModule } from './filmes.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";

import { CreateComponent } from './create/create.component';
import { ReaderComponent } from './reader/reader.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { CrudFilmesComponent } from './crud-filmes/crud-filmes.component';

/* ANGULAR MATERIAL */
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CreateComponent,
    ReaderComponent,
    UpdateComponent,
    DeleteComponent,
    CrudFilmesComponent,
  ],
  imports: [
    CommonModule,
    FilmesRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule,
    MatFormFieldModule,
    FormsModule
  ],
  exports:[
    ReaderComponent
  ]
})
export class FilmesModule { }
