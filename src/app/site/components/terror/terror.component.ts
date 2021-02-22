import { Filme } from './../../../painel-admin/cadastro/filmes/filme.model';
import { Component, OnInit } from '@angular/core';
import { FilmesService } from '../filmes.service';

@Component({
  selector: 'app-terror',
  templateUrl: './terror.component.html',
  styleUrls: ['./terror.component.css']
})
export class TerrorComponent implements OnInit {

  filmes: Filme[]

  constructor(
    private filmesService: FilmesService
  ) { }

  ngOnInit(): void {
    this.filmesService.getGenero('Terror')
      .subscribe((filmes) => {
        this.filmes = filmes
      })
  }

}
