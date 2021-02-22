import { Filme } from './../../../painel-admin/cadastro/filmes/filme.model';
import { Component, OnInit } from '@angular/core';
import { FilmesService } from '../filmes.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  filmes: Filme[]

  constructor(
    private filmesService: FilmesService
  ) { }

  ngOnInit(): void {
    this.filmesService.get()
      .subscribe((filmes) => {
        this.filmes = filmes
      })
  }

}
