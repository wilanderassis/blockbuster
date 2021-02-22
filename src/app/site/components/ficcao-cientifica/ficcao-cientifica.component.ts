import { Filme } from './../../../painel-admin/cadastro/filmes/filme.model';
import { Component, OnInit } from '@angular/core';
import { FilmesService } from '../filmes.service';

@Component({
  selector: 'app-ficcao-cientifica',
  templateUrl: './ficcao-cientifica.component.html',
  styleUrls: ['./ficcao-cientifica.component.css']
})
export class FiccaoCientificaComponent implements OnInit {

  filmes: Filme[]

  constructor(
    private filmesService: FilmesService
  ) { }

  ngOnInit(): void {
    this.filmesService.getGenero('Ficção científica')
      .subscribe((filmes) => {
        this.filmes = filmes
      })
  }
}
