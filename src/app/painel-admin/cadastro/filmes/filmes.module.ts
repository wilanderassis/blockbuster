import { FilmesRoutingModule } from './filmes.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";

import { CreateComponent } from './create/create.component';
import { ReaderComponent } from './reader/reader.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { CrudFilmesComponent } from './crud-filmes/crud-filmes.component';


/* PÁGINAÇÃO */
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { Ng2OrderModule } from "ng2-order-pipe";
import {NgxPaginationModule} from 'ngx-pagination';

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
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    Ng2OrderModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule
  ],
  exports:[
    ReaderComponent
  ]
})
export class FilmesModule { }
