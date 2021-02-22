import { FilmesService } from "../filmes.service";
import { Filme } from './../../../painel-admin/cadastro/filmes/filme.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acao',
  templateUrl: './acao.component.html',
  styleUrls: ['./acao.component.css']
})
export class AcaoComponent implements OnInit {

  filmes: Filme[]

  constructor(
    private filmesService: FilmesService
  ) { }

  ngOnInit(): void {
    this.filmesService.getGenero('Ação')
      .subscribe((filmes) => {
        this.filmes = filmes
      })
  }

}
