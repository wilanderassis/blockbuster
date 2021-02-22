import { FilmesService } from '../filmes.service';
import { Filme } from './../../../painel-admin/cadastro/filmes/filme.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comedia',
  templateUrl: './comedia.component.html',
  styleUrls: ['./comedia.component.css']
})
export class ComediaComponent implements OnInit {

  filmes: Filme[]

  constructor(
    private filmesService: FilmesService
  ) { }

  ngOnInit(): void {
    this.filmesService.getGenero('Comédia')
      .subscribe((filmes) => {
        this.filmes = filmes
      })
  }

}
